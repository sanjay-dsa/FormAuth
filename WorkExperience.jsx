import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Tech Solutions",
    duration: "2023 - Present",
    desc: "Developed responsive web applications using React.js and improved UI performance.",
  },
  {
    role: "UI/UX Designer",
    company: "Creative Studio",
    duration: "2022 - 2023",
    desc: "Designed modern user interfaces with a focus on user experience and accessibility.",
  },
  {
    role: "Intern Developer",
    company: "Startup Hub",
    duration: "2021 - 2022",
    desc: "Worked on real-time projects and learned full-stack development basics.",
  },
];

const WorkExperience = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-6 md:px-20">
      
      {/* Title */}
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Work Experience
      </motion.h2>

      {/* Timeline */}
      <div className="relative border-l-2 border-gray-700">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="mb-10 ml-6"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* Circle */}
            <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 border border-white"></div>

            {/* Card */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-blue-500/30 transition duration-300">
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className="text-blue-400">{exp.company}</p>
              <p className="text-sm text-gray-400 mb-2">{exp.duration}</p>
              <p className="text-gray-300">{exp.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;