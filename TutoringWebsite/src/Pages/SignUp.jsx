import React from "react";

const SignUp = () => {
  return (
    <div className="contact">
      <h1 className="services-header contact-header">Sign Up</h1>
      <div className="contact-container">
        <form>
          <label className="contact-label">Full name:</label>
          <br />
          <input type="text" className="contact-input" />
          <br />
          <label className="contact-label">I am a:</label>
          <br />
          <select className="contact-input">
            <option>Please select an option</option>
            <option>learner</option>
            <option>Parent</option>
          </select>
          <br />
          <label className="contact-label">Email:</label>
          <br />
          <input type="email" className="contact-input" />
          <br />
          <label className="contact-label">Phone number:</label>
          <br />
          <input type="tel" className="contact-input" />
          <br />
          <label className="contact-label">Password:</label>
          <br />
          <input type="password" className="contact-input" />
          <br />

          <div
            className="g-recaptcha"
            data-sitekey="6LexA4IqAAAAAPSyIgtsAuuoNPTDQmAbkZaBfVX2"></div>

          <input
            type="submit"
            value="Submit"
            className="contact-input contact-button"
          />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
