import React, { useState } from "react";

const FormValidation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const validate = () => {
    let newErrors = {};

    // Name
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email";
    }

    // Phone
    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    // Password
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    // Confirm Password
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      setSuccess("Form submitted successfully!");

      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
      });

      setErrors({});
    } else {
      setSuccess("");
    }
  };

  return (
    <div
      style={{
        width: "400px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.2)",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Form Validation</h2>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div style={{ marginBottom: "15px" }}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          />
          <small style={{ color: "red" }}>{errors.name}</small>
        </div>

        {/* Email */}
        <div style={{ marginBottom: "15px" }}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          />
          <small style={{ color: "red" }}>{errors.email}</small>
        </div>

        {/* Phone */}
        <div style={{ marginBottom: "15px" }}>
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          />
          <small style={{ color: "red" }}>{errors.phone}</small>
        </div>

        {/* Password */}
        <div style={{ marginBottom: "15px" }}>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          />
          <small style={{ color: "red" }}>{errors.password}</small>
        </div>

        {/* Confirm Password */}
        <div style={{ marginBottom: "15px" }}>
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          />
          <small style={{ color: "red" }}>
            {errors.confirmPassword}
          </small>
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          Submit
        </button>

        {success && (
          <p
            style={{
              color: "green",
              textAlign: "center",
              marginTop: "15px",
            }}
          >
            {success}
          </p>
        )}
      </form>
    </div>
  );
};

export default FormValidation;
