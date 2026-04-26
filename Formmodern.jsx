import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="form-container">
      <form className="form-card" onSubmit={handleSubmit}>
        <h2 className="form-title">Contact Us</h2>

        <div className="input-group">
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <label>Name</label>
        </div>

        <div className="input-group">
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <label>Email</label>
        </div>

        <div className="input-group">
          <textarea
            name="message"
            rows="4"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <label>Message</label>
        </div>

        <button type="submit" className="submit-btn">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Form;
