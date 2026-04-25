import React from "react";
import "./experience.css";

const Experience = () => {
  const experiences = [
    {
      company: "Spericorn Technology",
      position: "Software Engineer",
      start: "January 2026",
      end: "Present",
      location: "Trivandrum, India", // Please update location if needed
      isCurrent: true,
      description: [
        "Architected and maintained scalable RESTful APIs using Node.js, Express.js, Sequelize ORM, and TypeORM — with secure authentication, input validation, and efficient data handling patterns.",
        "Implemented real-time communication features using Socket.IO, enabling live event-driven interactions across connected clients.",
        "Designed asynchronous processing pipelines with RabbitMQ and AWS SQS, decoupling services and improving system resilience under load.",
        "Applied Redis caching strategies and PostgreSQL indexing to significantly reduce query response times and improve throughput.",
        "Containerized services using Docker, streamlining local development workflows and improving deployment consistency across environments.",
        "Integrated serverless functions and BigQuery analytics to process large datasets and surface actionable business insights.",
        "Championed backend best practices — CI/CD pipelines, unit testing, and clean architecture — while mentoring teammates to raise overall code quality and delivery speed.",
      ],
    },
    {
      company: "Gizmeon Technology",
      position: "Software Engineer",
      start: "September 2023",
      end: "December 2025",
      location: "Kochi, India",
      isCurrent: false,
      description: [
        "Led end-to-end development of the Perpetual Ad Exchange platform using Node.js, Express.js, React.js, and PostgreSQL — delivering a scalable, high-performance system built for reliability under real-world load.",
        "Designed and implemented RESTful APIs with clean, maintainable code, prioritizing seamless integration, secure data handling, and long-term reliability.",
        "Built Progressive Web Apps (PWA) and a content management dashboard for OTT platforms, improving operational efficiency and end-user experience.",
        "Deployed serverless functions and GCP services — including BigQuery and Cloud Functions — to enhance backend scalability and streamline analytics processing.",
        "Built and maintained Swagger API documentation, reducing developer onboarding time and improving cross-team collaboration.",
        "Conducted unit testing and code reviews with a focus on code quality, and actively mentored junior developers to raise team standards.",
        "Worked within agile workflows using Jira and Asana, facilitating sprint planning and cross-functional coordination across the team.",
      ],
    }
  ];

  return (
    <section id="experience">
      <div class="experienceDivider"></div>
      <div className="experience-container">
        <div className="experience-header">
          <h1>Experience</h1>
          <p>Discover my professional roles, responsibilities, and technical achievements in the tech industry.</p>
        </div>
        <div className="experience-content">
          {experiences.map((exp, index) => (
            <div className="company-card" key={index}>
              <div className="company-header">
                <h2>{exp.company}</h2>
                {exp.isCurrent && <span className="badge">Current</span>}
              </div>
              <h3>{exp.position}</h3>
              <p className="date">
                {exp.start} - {exp.end}
              </p>
              <p className="location">{exp.location}</p>
              <ul className="description">
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
