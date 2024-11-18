import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <h1 className="services-header contact-header">Contact Form</h1>
      <div className="contact-container">
        <form>
          <label className="contact-label">Name:</label>
          <br />
          <input type="text" className="contact-input" />
          <br />
          <label className="contact-label">Email:</label>
          <br />
          <input type="email" className="contact-input" />
          <br />
          <label className="contact-label">Phone number:</label>
          <br />
          <input type="tel" className="contact-input" />
          <br />
          <label className="contact-label">Message:</label>
          <br />
          <textarea className="contact-textarea"></textarea>
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
    </div>
  );
};

export default Contact;
