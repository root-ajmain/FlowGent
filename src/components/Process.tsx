import { motion } from "motion/react";
import { useEffect, useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "We understand your business goals, audience, and current digital presence.",
  },
  {
    number: "02",
    title: "Strategy Design",
    description:
      "We craft a customized digital ecosystem plan tailored to your industry.",
  },
  {
    number: "03",
    title: "Build & Integrate",
    description:
      "We build, configure, and connect all your platforms, tools, and automations.",
  },
  {
    number: "04",
    title: "Launch & Scale",
    description:
      "We go live, monitor performance, and continuously optimize for growth.",
  },
];

/* ═══════════════════════════════════════════════════════
   Realistic ECG Monitor — Canvas sweep with phosphor
   persistence, eraser gap, subtle grid, and BPM readout
   ═══════════════════════════════════════════════════════ */

/**
 * High-fidelity PQRST waveform generator.
 * Uses smooth cosine-bell shapes for each wave component,
 * producing a clinically accurate-looking Lead-II ECG morphology.
 *
 * @param t  normalised position within a single beat cycle [0, 1)
 * @returns  y-offset from centre (negative = up on screen)
 */
function ecgSample(t: number): number {
  // Helper: raised cosine bell  centred at `c` with half-width `w` and amplitude `a`
  const bell = (x: number, c: number, w: number, a: number) =>
    Math.abs(x - c) < w ? a * 0.5 * (1 + Math.cos(Math.PI * (x - c) / w)) : 0;

  let y = 0;

  // P wave – gentle positive bump
  y += bell(t, 0.18, 0.05, -5);

  // Q dip – small negative deflection just before R
  y += bell(t, 0.30, 0.012, 4);

  // R spike – tall, sharp positive peak (main QRS deflection)
  y += bell(t, 0.33, 0.018, -28);

  // S dip – sharp negative immediately after R
  y += bell(t, 0.36, 0.015, 10);

  // ST segment is naturally flat (y stays 0)

  // T wave – broad positive dome
  y += bell(t, 0.56, 0.06, -9);

  // U wave – tiny optional bump (adds realism)
  y += bell(t, 0.68, 0.025, -1.5);

  return y;
}

function EcgMonitor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animId: number;
    let sweepX = 0;
    const SPEED = 2.0; // px per frame
    const CANVAS_H = 56;
    const CY = CANVAS_H / 2; // vertical centre

    // Persistent framebuffer — stores the drawn trace so old pixels naturally
    // dim over time (phosphor decay) instead of disappearing instantly.
    let traceBuffer: Float32Array;

    function resize() {
      const w = container!.clientWidth;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = Math.round(w * dpr);
      canvas!.height = Math.round(CANVAS_H * dpr);
      canvas!.style.width = `${w}px`;
      canvas!.style.height = `${CANVAS_H}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      traceBuffer = new Float32Array(Math.ceil(w));
      sweepX = 0; // restart sweep after resize
    }

    resize();
    window.addEventListener("resize", resize);

    // One beat spans this many CSS px — smaller = more frequent beats
    function beatPx() {
      return container!.clientWidth / 7;
    }

    function draw() {
      const w = container!.clientWidth;
      const bp = beatPx();

      // ── 1. Fade the entire canvas slightly → phosphor persistence ──
      ctx!.fillStyle = "rgba(12,16,23, 0.12)"; // match void bg #0C1017
      ctx!.fillRect(0, 0, w, CANVAS_H);

      // ── 2. Subtle grid lines ──
      ctx!.strokeStyle = "rgba(108,99,255,0.035)";
      ctx!.lineWidth = 0.5;
      const gridSpacing = 20;
      for (let gx = 0; gx < w; gx += gridSpacing) {
        ctx!.beginPath();
        ctx!.moveTo(gx, 0);
        ctx!.lineTo(gx, CANVAS_H);
        ctx!.stroke();
      }
      for (let gy = 0; gy < CANVAS_H; gy += gridSpacing) {
        ctx!.beginPath();
        ctx!.moveTo(0, gy);
        ctx!.lineTo(w, gy);
        ctx!.stroke();
      }

      // ── 3. Baseline ──
      ctx!.strokeStyle = "rgba(108,99,255,0.06)";
      ctx!.lineWidth = 0.5;
      ctx!.beginPath();
      ctx!.moveTo(0, CY);
      ctx!.lineTo(w, CY);
      ctx!.stroke();

      // ── 4. Draw fresh trace segment (just a few pixels behind cursor) ──
      const freshLen = Math.ceil(SPEED) + 2;
      const freshStart = Math.max(0, Math.floor(sweepX) - freshLen);

      // Main bright trace
      ctx!.lineWidth = 2;
      ctx!.lineJoin = "round";
      ctx!.lineCap = "round";

      // Build a short path for the newly drawn segment
      ctx!.beginPath();
      for (let px = freshStart; px <= Math.floor(sweepX); px++) {
        const t = ((px % bp) + bp) % bp / bp; // normalised beat position
        const y = CY + ecgSample(t);
        if (px < 0 || px >= w) continue;
        traceBuffer[px] = y;
        if (px === freshStart) ctx!.moveTo(px, y);
        else ctx!.lineTo(px, y);
      }
      ctx!.strokeStyle = "rgba(0,229,255,0.95)";
      ctx!.stroke();

      // Glow layer (thicker, semi-transparent)
      ctx!.lineWidth = 5;
      ctx!.strokeStyle = "rgba(0,229,255,0.15)";
      ctx!.beginPath();
      for (let px = freshStart; px <= Math.floor(sweepX); px++) {
        const y = traceBuffer[px] ?? CY;
        if (px === freshStart) ctx!.moveTo(px, y);
        else ctx!.lineTo(px, y);
      }
      ctx!.stroke();

      // ── 6. Re-draw the full persisted trace (dimmed phosphor) ──
      ctx!.lineWidth = 1.5;
      ctx!.lineJoin = "round";
      ctx!.lineCap = "round";

      // Behind the cursor (already drawn trace that's aging)
      const behindStart = ((Math.floor(sweepX) + 10) % w);
      ctx!.beginPath();
      let moved = false;
      for (let i = 0; i < w - 20; i++) {
        const px = (behindStart + i) % w;
        if (px >= Math.floor(sweepX) - freshLen && px <= Math.floor(sweepX) + 10) continue;
        const y = traceBuffer[px];
        if (y === undefined || y === 0) { moved = false; continue; }
        // Compute age-based opacity: closer to cursor = brighter
        let dist: number;
        if (px < sweepX) {
          dist = sweepX - px;
        } else {
          dist = (w - px) + sweepX;
        }
        const alpha = Math.max(0.08, 0.6 - (dist / w) * 0.55);
        if (!moved) {
          ctx!.stroke();
          ctx!.beginPath();
          ctx!.strokeStyle = `rgba(108,99,255,${alpha.toFixed(3)})`;
          ctx!.moveTo(px, y);
          moved = true;
        } else {
          ctx!.lineTo(px, y);
        }
      }
      ctx!.stroke();

      // ── 7. Cursor glow ──
      const cursorT = ((Math.floor(sweepX) % bp) + bp) % bp / bp;
      const cursorY = CY + ecgSample(cursorT);

      // Outer soft glow
      const glowGrad = ctx!.createRadialGradient(sweepX, cursorY, 0, sweepX, cursorY, 12);
      glowGrad.addColorStop(0, "rgba(0,229,255,0.35)");
      glowGrad.addColorStop(0.5, "rgba(0,229,255,0.08)");
      glowGrad.addColorStop(1, "rgba(0,229,255,0)");
      ctx!.fillStyle = glowGrad;
      ctx!.fillRect(sweepX - 12, cursorY - 12, 24, 24);

      // Inner bright dot
      ctx!.beginPath();
      ctx!.arc(sweepX, cursorY, 2.5, 0, Math.PI * 2);
      ctx!.fillStyle = "rgba(0,229,255,1)";
      ctx!.fill();

      // ── Advance sweep ──
      sweepX += SPEED;
      if (sweepX >= w) sweepX = 0;

      animId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div ref={containerRef} className="hidden md:block absolute top-[2.25rem] left-0 w-full h-14 -translate-y-1/2 pointer-events-none z-0">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}

export default function Process() {
  return (
    <section className="py-20 bg-void relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90vw] max-w-[700px] h-[350px] bg-electric/[0.04] rounded-full blur-[120px]" />
      </div>

      {/* Keyframe animations */}
      <style>{`
        @keyframes ecg-ping {
          0%   { box-shadow: 0 0 0 0 rgba(108,99,255,0.6); }
          70%  { box-shadow: 0 0 0 10px rgba(108,99,255,0); }
          100% { box-shadow: 0 0 0 0 rgba(108,99,255,0); }
        }
      `}</style>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            How We Build Your{" "}
            <span className="text-gradient-spectrum">Digital Ecosystem</span>
          </h2>
        </div>

        <div className="relative">
          {/* ═══ Real ECG Monitor (Desktop) — Canvas sweep left→right ═══ */}
          <EcgMonitor />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative group"
              >
                {/* Connecting Line (Mobile) */}
                {index !== steps.length - 1 && (
                  <div className="md:hidden absolute left-[1.75rem] top-[3.5rem] bottom-[-2rem] w-px bg-gradient-to-b from-electric/30 to-transparent" />
                )}

                <div className="flex md:flex-col items-start md:items-center gap-5 md:gap-6">
                  {/* Step circle with ping animation */}
                  <div
                    className="w-14 h-14 md:w-[4.5rem] md:h-[4.5rem] rounded-full glass-card flex items-center justify-center border border-electric/20 bg-electric/[0.06] shrink-0 relative z-10 transition-all duration-500 group-hover:border-electric/50 group-hover:bg-electric/[0.12] group-hover:shadow-[0_0_20px_rgba(108,99,255,0.25)]"
                    style={{
                      animation: `ecg-ping 2.4s cubic-bezier(0,0,0.2,1) infinite ${index * 0.6}s`,
                    }}
                  >
                    <span className="text-xl font-mono font-bold text-gradient-spectrum transition-colors duration-300 group-hover:text-white">
                      {step.number}
                    </span>
                  </div>

                  <div className="md:text-center pt-3 md:pt-0">
                    <h3 className="text-lg font-display font-bold text-white mb-2 transition-colors duration-300 group-hover:text-gradient-spectrum">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-[0.8rem]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
