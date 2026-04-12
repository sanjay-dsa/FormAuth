import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "Freelance",
    duration: "2025 - Present",
    description:
      "Building responsive web applications using React.js, Tailwind CSS, and modern UI/UX practices. Worked on real-time client projects.",
  },
  {
    id: 2,
    role: "React Developer Intern",
    company: "Tech Startup",
    duration: "2024 - 2025",
    description:
      "Developed reusable components, improved performance, and collaborated with backend teams using REST APIs.",
  },
  {
    id: 3,
    role: "Web Developer",
    company: "Personal Projects",
    duration: "2023 - 2024",
    description:
      "Created portfolio websites, landing pages, and mini applications with responsive design and animations.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My Experience
        </h2>

        {/* Timeline */}
        <div className="relative border-l-2 border-gray-700">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-10 ml-6"
            >
              {/* Circle */}
              <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full ring-4 ring-gray-900"></span>

              {/* Card */}
              <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-blue-500/30 transition">
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <p className="text-blue-400">{exp.company}</p>
                <span className="text-sm text-gray-400">
                  {exp.duration}
                </span>
                <p className="mt-3 text-gray-300">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;



import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "Freelance",
    duration: "2025 - Present",
    description:
      "Developing responsive and scalable web apps using React.js and Tailwind CSS with modern UI/UX.",
  },
  {
    id: 2,
    role: "React Developer Intern",
    company: "Startup Company",
    duration: "2024 - 2025",
    description:
      "Worked with APIs, optimized performance, and built reusable components.",
  },
  {
    id: 3,
    role: "Web Developer",
    company: "Personal Projects",
    duration: "2023 - 2024",
    description:
      "Created portfolio sites and dynamic web apps with animations and responsive layouts.",
  },
];

// Animation Variants
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 80, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Experience = () => {
  return (
    <section className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-center mb-16"
        >
          My Experience
        </motion.h2>

        {/* Timeline Container */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="relative border-l-2 border-gray-700"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="mb-12 ml-6"
            >
              {/* Timeline Dot */}
              <span className="absolute -left-3 w-6 h-6 bg-blue-500 rounded-full ring-4 ring-black animate-pulse"></span>

              {/* Card */}
              <div className="bg-gray-800/80 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:shadow-blue-500/40 transition-all duration-300">
                
                <h3 className="text-xl md:text-2xl font-semibold">
                  {exp.role}
                </h3>

                <p className="text-blue-400 mt-1">
                  {exp.company}
                </p>

                <span className="text-sm text-gray-400">
                  {exp.duration}
                </span>

                <p className="mt-4 text-gray-300 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Experience;





