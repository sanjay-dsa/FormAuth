import { motion } from "framer-motion";

const experiences = [
  {
    company: "Freelance Web Developer",
    role: "Frontend Developer",
    duration: "2025 - Present",
    description:
      "Built responsive websites using React.js, Tailwind CSS, JavaScript, and modern UI practices. Developed portfolio, e-commerce, and educational websites.",
  },
  {
    company: "Personal Projects",
    role: "React Developer",
    duration: "2024 - 2025",
    description:
      "Created projects including E-Commerce Website, STC College Website, Portfolio Website, and To-Do App using React, Node.js, Express, and MongoDB.",
  },
];

const WorkExperience = () => {
  return (
    <section id="experience" className="py-20 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Work Experience
        </motion.h2>

        <div className="relative border-l-2 border-cyan-500 ml-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-10 ml-8"
            >
              <div className="absolute -left-[11px] w-5 h-5 bg-cyan-500 rounded-full border-4 border-slate-950"></div>

              <div className="bg-slate-900 rounded-xl p-6 shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 hover:-translate-y-2">
                <h3 className="text-2xl font-semibold text-cyan-400">
                  {exp.role}
                </h3>

                <p className="text-lg font-medium mt-1">
                  {exp.company}
                </p>

                <span className="text-gray-400 text-sm">
                  {exp.duration}
                </span>

                <p className="mt-4 text-gray-300 leading-7">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
