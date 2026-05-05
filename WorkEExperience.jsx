import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Tech Corp",
    role: "Frontend Developer",
    duration: "2023 - Present",
    description:
      "Worked on building responsive web applications using React, improving UI performance and user experience.",
  },
  {
    company: "Startup Labs",
    role: "Intern Developer",
    duration: "2022 - 2023",
    description:
      "Assisted in developing web apps and learned modern JavaScript frameworks and APIs.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const WorkExperience = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-10 px-5">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Work Experience
      </h2>

      <motion.div
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg"
          >
            <h3 className="text-xl font-semibold">{exp.role}</h3>
            <p className="text-gray-400">{exp.company}</p>
            <p className="text-sm text-gray-500 mb-3">
              {exp.duration}
            </p>
            <p className="text-gray-300 text-sm">{exp.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default WorkExperience;

/*
SETUP INSTRUCTIONS:

1. Install dependencies:
   npm install framer-motion

2. Make sure Tailwind CSS is installed for styling
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init

3. Add Tailwind to index.css:
   @tailwind base;
   @tailwind components;
   @tailwind utilities;

4. Import and use component in App.jsx:
   import WorkExperience from './WorkExperience';

   function App() {
     return <WorkExperience />;
   }

*/
