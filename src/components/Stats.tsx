import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 500, label: "Clients Served", suffix: "+" },
  { value: 50, label: "AI Agents Deployed", suffix: "+" },
  { value: 10, label: "Messages Delivered", suffix: "M+" },
  { value: 98, label: "Client Satisfaction", suffix: "%" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (hasAnimated || !ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();

          let start = 0;
          const end = value;
          const duration = 2000;
          const incrementTime = (duration / end) * 15;

          const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start >= end) clearInterval(timer);
          }, incrementTime);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <span ref={ref} className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-void">
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="bg-[image:linear-gradient(135deg,#6C63FF_0%,#00E5FF_50%,#FF6B35_100%)] py-10 relative z-20 shadow-[0_0_40px_rgba(0,229,255,0.25)]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center md:divide-x md:divide-void/20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center justify-center px-4"
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <span className="text-black/50 font-semibold mt-1.5 text-[0.65rem] md:text-xs uppercase tracking-widest">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
