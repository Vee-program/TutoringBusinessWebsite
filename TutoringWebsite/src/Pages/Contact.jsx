import React, { useState } from "react";
import Footer from "../Components/Footer/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    alert("Sent successfully! We'll be in touch.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };
  return (
    <div className="contact">
      <h1 className="services-header contact-header">Contact Form</h1>
      <div className="contact-container">
        <form onSubmit={handleSubmit}>
          <label className="contact-label">Name:</label>
          <br />
          <input
            type="text"
            className="contact-input"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <br />
          <label className="contact-label">Email:</label>
          <br />
          <input
            type="email"
            className="contact-input"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <br />
          <label className="contact-label">Phone number:</label>
          <br />
          <input
            type="tel"
            className="contact-input"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <br />
          <label className="contact-label">Message:</label>
          <br />
          <textarea
            className="contact-textarea"
            name="message"
            value={formData.message}
            onChange={handleChange}></textarea>
          <br />

          <div
            className="g-recaptcha"
            data-sitekey="6LexA4IqAAAAAPSyIgtsAuuoNPTDQmAbkZaBfVX2"></div>

          <input
            type="submit"
            value="Send Inquiry"
            className="contact-input contact-button"
          />
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
