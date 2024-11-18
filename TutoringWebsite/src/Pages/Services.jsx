import React from "react";
import Card from "../Components/Card/Card";
import computer from "../assets/computer.png";
import math from "../assets/math.png";
import science from "../assets/science.png";
import natural from "../assets/natural.png";
import physics from "../assets/physics.png";
import laptop from "../assets/laptop-icon.png";
import location from "../assets/location-icon.png";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="services">
      <div className="services-container">
        <h1 className="services-header">Services Breakdown</h1>
        <div className="subjects-container">
          <h2 className="subjects-header">Subjects Offered</h2>
          <div className="subjects">
            <Card title="Mathematics" image={math} />
            <Card title="Physical sciences" image={physics} />
            <Card title="Natural Sciences" image={natural} />
            <Card title="CAT" image={computer} />
            <Card title="Life Sciences" image={science} />
          </div>
        </div>
        <div className="options-container">
          <h2 className="subjects-header">Tutoring Options:</h2>
          <div className="tutoring-options">
            <div>
              <h1 className="options-header">Group Sessions:</h1>
              <p className="options-subheader">
                Small group sizes for collaborative learning
              </p>
            </div>
            <div>
              <h1 className="options-header">One-on-One:</h1>
              <p className="options-subheader">
                Personalized sessions tailored to individual goals
              </p>
            </div>
          </div>
        </div>
        <div className="sessions">
          <h2 className="subjects-header">Session Type:</h2>
          <div className="session-type">
            <Card title="Johannesburg, Rosebank area" image={location} />
            <Card title="Online on Zoom" image={laptop} />
          </div>
        </div>
        <h2 className="callToAction">Ready to get started ?</h2>
        <Link to="/signup">
          <button className="sessionButton">Choose Your Session Type</button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
