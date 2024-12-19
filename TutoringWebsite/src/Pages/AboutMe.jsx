import React from "react";
import profile from "../assets/profile.png";
import Footer from "../Components/Footer/Footer";

const AboutMe = () => {
  return (
    <div className="about">
      <div className="about-container">
        <h1 className="about-heading">Meet Your Tutor</h1>
        <img
          src={profile}
          alt="a woman with long hair and yellow shirt"
          className="profile-image"
        />
        <h3 className="info-header">Teaching Approach:</h3>
        <p className="tutor-info">
          Lucy believes in fostering a supportive and engaging learning
          environment tailored to the unique needs of each student. By utilizing
          a mix of practical exercises, real-world examples, and interactive
          teaching methods, Lucy ensures that students not only grasp
          theoretical concepts but also develop the confidence to apply them
          effectively. The teaching philosophy centers on active participation,
          critical thinking, and continuous improvement.
        </p>
        <h3 className="info-header">Experince:</h3>
        <p className="tutor-info">
          With 5years of teaching experience in Mathematics, Physcical Sciences,
          Life Sciences and Accounting, Lucy has successfully guided 500 of
          students in achieving their academic or professional goals. Their
          expertise spans areas such as Science, Accounting and Technology,
          offering both beginner and advanced learners valuable insights and
          hands-on knowledge.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default AboutMe;
