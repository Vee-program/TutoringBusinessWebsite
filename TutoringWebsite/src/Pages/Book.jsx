import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer/Footer";

const Book = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    position: "",
    mathematics: "",
    physicalsciences: "",
    lifesciences: "",
    cat: "",
    naturalsciences: "",
    option: "",
    session: "",
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

    alert("You have successfully booked your session");
    setFormData({
      name: "",
      email: "",
      phone: "",
      password: "",
    });

    navigate("/dashboard");
  };
  return (
    <div className="contact">
      <h1 className="services-header contact-header">Book A Session</h1>
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
          <label className="contact-label">Surname:</label>
          <br />
          <input
            type="text"
            className="contact-input"
            name="surname"
            value={formData.surname}
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
          <label className="contact-label">Phone:</label>
          <br />
          <input
            type="tel"
            className="contact-input"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <br />
          <label className="contact-label">I am a:</label>
          <br />
          <select
            className="contact-input"
            name="position"
            value={formData.position}
            onChange={handleChange}>
            <option>Please select an option</option>
            <option>learner</option>
            <option>Parent</option>
          </select>
          <br />
          <label className="contact-label">Choose one or more subjects:</label>
          <br />
          <input
            type="checkbox"
            className="checkbox"
            name="mathematics"
            value={formData.mathematics}
            onChange={handleChange}
          />
          <label className="contact-label">Mathematics</label>
          <br />
          <input
            type="checkbox"
            className="checkbox"
            name="physicalsciences"
            value={formData.physicalsciences}
            onChange={handleChange}
          />
          <label className="contact-label">Physical Sciences</label>
          <br />{" "}
          <input
            type="checkbox"
            className="checkbox"
            name="lifesciences"
            value={formData.lifesciences}
            onChange={handleChange}
          />
          <label className="contact-label">Life Sciences</label>
          <br />
          <input
            type="checkbox"
            className="checkbox"
            name="cat"
            value={formData.cat}
            onChange={handleChange}
          />
          <label className="contact-label">CAT</label>
          <br />
          <input
            type="checkbox"
            className="checkbox bottom"
            name="naturalsciences"
            value={formData.naturalsciences}
            onChange={handleChange}
          />
          <label className="contact-label">Natural Sciences</label>
          <br />
          <label className="contact-label">Choose a tutoring option:</label>
          <br />
          <select
            className="contact-input"
            name="session"
            value={formData.session}
            onChange={handleChange}>
            <option>Please select an option</option>
            <option>Group sessions</option>
            <option>One on One sessions</option>
          </select>
          <br />
          <label className="contact-label">Choose a type of sesssion:</label>
          <br />
          <select
            className="contact-input"
            name="option"
            value={formData.option}
            onChange={handleChange}>
            <option>Please select an option</option>
            <option>Online on Zoom</option>
            <option>Physical around Pretoria, Rosebank</option>
          </select>
          <br />
          <input
            type="submit"
            value="Submit"
            className="contact-input contact-button"
          />
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Book;
