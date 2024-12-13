import React from "react";
import "./experience.css";

const Experience = () => {
  const companyDetails = {
    company: "Gizmeon Technology",
    position: "Software Developer",
    start: "September 2024",
    end: "Present",
    location: "Kochi, India",
    description: [
      "Spearheaded the development of the end-to-end 'Perpetual' Ad Exchange platform, leveraging Node.js, Express.js, React.js, and PostgreSQL.",
      "Created multiple responsive pages for the project using HTML, CSS, and React, and created comprehensive Swagger documentation for the complete project APIs, ensuring clarity and ease of use for developers.",
      "Developed Progressive Web Apps (PWA) and created a new version to display ads only and ads with playlists, showcasing versatility in frontend technologies like HTML, CSS, JavaScript, and backend Node.js development.",
      "Designed and implemented numerous APIs with efficient, clean, and optimized code. Developed and executed unit tests to ensure robust and reliable backend functionality.",
      "Mentored junior team members, assisting with tasks and clearing doubts, fostering a collaborative and productive team environment, demonstrating leadership and communication skills.",
    ],
  };

  return (
    <section id="experience">
       <div class="experienceDivider"></div>
      <div className="experience-container">
        <div className="experience-header">
          <h1>Experience</h1>
          <p>
            Discover my professional roles, responsibilities, and technical achievements in the tech industry.
          </p>
        </div>
        <div className="experience-content">
          <div className="company-card">
            <div className="company-header">
              <h2>{companyDetails.company}</h2>
              <span className="badge">Current</span>
            </div>
            <h3>{companyDetails.position}</h3>
            <p className="date">
              {companyDetails.start} - {companyDetails.end}
            </p>
            <p className="location">{companyDetails.location}</p>
            <ul className="description">
              {companyDetails.description.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
