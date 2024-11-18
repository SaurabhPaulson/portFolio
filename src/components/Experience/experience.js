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
      "Spearheaded the development of a patented Digital Out-Of-Home (DOOH) platform.",
      "Developed an Ad Exchange platform that connects advertisers, brands, and publishers to high-demand ad inventory, optimizing campaign reach and performance.",
      "Utilized a diverse tech stack including React.js, Express.js, BigQuery, Redis, and various Google Cloud Platform (GCP) services like Cloud Functions, Cloud Storage, Cloud SQL, and Cloud Build.",
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
