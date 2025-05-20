import React from "react";
import "./experience.css";

const Experience = () => {
  const companyDetails = {
    company: "Gizmeon Technology",
    position: "Software Engineer",
    start: "September 2023",
    end: "Present",
    location: "Kochi, India",
    description: [
      "Directed the end-to-end development of the Perpetual Ad Exchange platform using Node.js, Express.js, React.js, and PostgreSQL, delivering a scalable and high-performance solution.",
      "Designed and implemented RESTful APIs with clean, optimized code, ensuring seamless integration and robust functionality.",
      "Developed Progressive Web Apps (PWA) for ad display and playlist-based content, enhancing user experience with React.js, HTML, CSS, and JavaScript.",
      "Built a dynamic content management dashboard for an OTT platform, streamlining content organization and delivery.",
      "Created detailed Swagger documentation for APIs, improving developer onboarding and integration clarity.",
      "Ensured long-term software stability by writing scalable, maintainable code and implementing SSL certificate management for enhanced security.",
      "Conducted unit testing for backend services, ensuring reliability and maintainability of the codebase.",
      "Mentored junior developers in responsive design, Redux state management, and backend best practices, fostering team growth.",
      "Established efficient communication channels within the team, improving collaboration and project execution.",
      "Developed and deployed serverless functions using Google Cloud Functions, optimizing backend processes and improving scalability.",
      "Worked with Google BigQuery for data analytics, handling large datasets efficiently to generate insights and reports.",
      "Integrated GCP services to enhance system performance, utilizing cloud-based storage and compute capabilities.",
      "Actively engaged in continuous improvement of unit testing skills with each feature implementation, incorporating feedback, adopting best practices, and exploring advanced testing techniques.",
    ],
  };

  return (
    <section id="experience">
      <div class="experienceDivider"></div>
      <div className="experience-container">
        <div className="experience-header">
          <h1>Experience</h1>
          <p>Discover my professional roles, responsibilities, and technical achievements in the tech industry.</p>
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
