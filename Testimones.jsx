import React from "react";
import { motion } from "framer-motion";
import "./Testimones.css";

const testimonials = [
  {
    id: 1,
    name: "Arun Kumar",
    role: "Frontend Developer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    message:
      "This platform helped me improve my skills quickly. The UI and experience are amazing!",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    message:
      "Beautiful design and smooth animations. I really enjoyed using this website!",
  },
  {
    id: 3,
    name: "Rahul Verma",
    role: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    message:
      "Highly responsive and fast. Works perfectly on mobile and desktop.",
  },
];

const Testimones = () => {
  return (
    <div className="testimonials-section">
      <h2 className="title">What Our Users Say</h2>

      <div className="testimonials-container">
        {testimonials.map((item, index) => (
          <motion.div
            className="testimonial-card"
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p className="role">{item.role}</p>
            <p className="message">"{item.message}"</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimones;
