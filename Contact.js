import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/contact",
        form
      );

      alert(res.data.message);

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      alert("Failed to send message");
      console.log(err);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Contact Us
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full border p-3 rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full border p-3 rounded"
        />

        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          className="w-full border p-3 rounded"
        ></textarea>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded w-full hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
