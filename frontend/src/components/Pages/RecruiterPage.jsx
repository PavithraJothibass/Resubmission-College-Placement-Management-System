// src/pages/RecruiterPage.jsx

import React from "react";
import recruiterImage from "./rec.png"; // Adjusted import path to reflect the image inside the same folder
import "./RecruiterPage.css"; // Adjust the path if necessary

const RecruiterPage = () => {
  return (
    <div className="recruiter-page">
      <h2>Recruiter Dashboard</h2>
      <div className="recruiter-image-container">
        <img src={recruiterImage} alt="Recruiter" /> {/* Display the image from the same folder */}
      </div>
      <p>Welcome to the Recruiter dashboard. Here, you can manage your recruitment activities.</p>
    </div>
  );
};

export default RecruiterPage;
