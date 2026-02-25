import { motion } from "motion/react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "R. Uddin",
    company: "TechVenture",
    quote:
      "FlowGent completely transformed our customer service with their WhatsApp API integration. We're handling 5x the volume with the same team.",
    rating: 5,
  },
  {
    name: "S. Islam",
    company: "Fashion House",
    quote:
      "The social media ecosystem they built for us increased our online sales by 200% in just 3 months. Highly recommended!",
    rating: 5,
  },
  {
    name: "K. Hasan",
    company: "Logistics Pro",
    quote:
      "Their n8n AI agents automated our entire lead qualification process. It's like having a 24/7 sales team that never sleeps.",
    rating: 5,
  },
  {
    name: "N. Jahan",
    company: "EduTech Solutions",
    quote:
      "Professional, fast, and deeply knowledgeable. The website they built is beautiful and converts amazingly well.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-primary-dark relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-12">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            What Our <span className="text-gradient-teal">Clients Say</span>
          </h2>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden flex">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 md:w-32 bg-gradient-to-r from-primary-dark to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 md:w-32 bg-gradient-to-l from-primary-dark to-transparent z-10" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
          className="flex gap-4 sm:gap-6 px-4 sm:px-6 w-max"
        >
          {/* Duplicate list for seamless looping */}
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={index}
              className="w-[260px] sm:w-[300px] md:w-[380px] glass-card rounded-2xl p-5 sm:p-6 flex flex-col shrink-0"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="fill-accent-gold text-accent-gold"
                  />
                ))}
              </div>

              <p className="text-gray-400 text-[0.85rem] italic mb-6 flex-1 leading-relaxed">
                &quot;{testimonial.quote}&quot;
              </p>

              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 rounded-full bg-gradient-teal flex items-center justify-center text-primary-dark font-bold text-sm">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">{testimonial.name}</h4>
                  <p className="text-accent-teal text-xs">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
