import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";

const filterTabs = ["All", "WhatsApp", "Social Media", "Web Dev", "AI Agents"];

const projects = [
  {
    id: 1,
    category: "WhatsApp",
    title: "Retail Chatbot",
    metrics: "50% increase in leads",
    image: "https://picsum.photos/600/400?random=1",
  },
  {
    id: 2,
    category: "Web Dev",
    title: "E-commerce Platform",
    metrics: "2x ROI in 3 months",
    image: "https://picsum.photos/600/400?random=2",
  },
  {
    id: 3,
    category: "AI Agents",
    title: "Lead Qualification Bot",
    metrics: "85% Automation of FAQs",
    image: "https://picsum.photos/600/400?random=3",
  },
  {
    id: 4,
    category: "Social Media",
    title: "Brand Awareness Campaign",
    metrics: "2M+ Reach & 3x Engagement",
    image: "https://picsum.photos/600/400?random=4",
  },
  {
    id: 5,
    category: "WhatsApp",
    title: "Customer Support Automation",
    metrics: "90% Resolution Rate",
    image: "https://picsum.photos/600/400?random=5",
  },
  {
    id: 6,
    category: "Web Dev",
    title: "Corporate Website",
    metrics: "40% Bounce Rate Drop",
    image: "https://picsum.photos/600/400?random=6",
  },
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <section id="portfolio" className="py-20 bg-primary-navy relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Our Work{" "}
            <span className="text-gradient-teal">Speaks for Itself</span>
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                activeTab === tab
                  ? "bg-accent-teal text-primary-dark shadow-[0_0_15px_rgba(0,200,150,0.4)]"
                  : "bg-white/5 text-gray-300 hover:bg-white/10"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary-dark/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-accent-teal font-mono text-[0.7rem] mb-1.5 tracking-wide">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-display font-bold text-white mb-1.5">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{project.metrics}</p>

                  <Link
                    to={`/portfolio/${project.id}`}
                    className="bg-white/10 hover:bg-white/20 text-white font-medium text-xs py-1.5 px-3 rounded-lg border border-white/[0.1] transition-colors w-max"
                  >
                    View Case Study
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
