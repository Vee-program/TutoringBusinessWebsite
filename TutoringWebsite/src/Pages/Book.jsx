import React from "react";

const Book = () => {
  return (
    <div className="contact">
      <h1 className="services-header contact-header">Book A Session</h1>
      <div className="contact-container">
        <form>
          <label className="contact-label">Name:</label>
          <br />
          <input type="text" className="contact-input" />
          <br />
          <label className="contact-label">Surname:</label>
          <br />
          <input type="text" className="contact-input" />
          <br />
          <label className="contact-label">Email:</label>
          <br />
          <input type="email" className="contact-input" />
          <br />
          <label className="contact-label">Phone:</label>
          <br />
          <input type="tel" className="contact-input" />
          <br />
          <label className="contact-label">I am a:</label>
          <br />
          <select className="contact-input">
            <option>Please select an option</option>
            <option>learner</option>
            <option>Parent</option>
          </select>
          <br />
        </form>
      </div>
    </div>
  );
};

export default Book;
