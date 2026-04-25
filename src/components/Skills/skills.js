import React from 'react';
import './skills.css';
import Marquee from 'react-fast-marquee';
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs,
  SiPostgresql, SiGooglecloud, SiGit, SiSwagger, SiDocker,
  SiExpress, SiRedux, SiPwa, SiRedis, SiRabbitmq,
  SiSocketdotio, SiSequelize, SiTypeorm, SiAmazonwebservices
} from "react-icons/si";
import { TbApi, TbCloudComputing, TbBrandGithubCopilot } from "react-icons/tb";

const Skills = () => {
  const skillsData = [
    { name: "Node.js", icon: <SiNodedotjs color="#339933" /> },
    { name: "Express.js", icon: <SiExpress color="#000000" /> },
    { name: "React.js", icon: <SiReact color="#61DAFB" /> },
    { name: "Redux", icon: <SiRedux color="#764ABC" /> },
    { name: "PostgreSQL", icon: <SiPostgresql color="#4169E1" /> },
    { name: "TypeORM", icon: <SiTypeorm color="#FE0803" /> },
    { name: "Sequelize", icon: <SiSequelize color="#52B0E7" /> },
    { name: "Redis", icon: <SiRedis color="#DC382D" /> },
    { name: "RabbitMQ", icon: <SiRabbitmq color="#FF6600" /> },
    { name: "AWS SQS", icon: <SiAmazonwebservices color="#232F3E" /> },
    { name: "Socket.IO", icon: <SiSocketdotio color="#010101" /> },
    { name: "GCP", icon: <SiGooglecloud color="#4285F4" /> },
    { name: "BigQuery", icon: <TbCloudComputing color="#4285F4" /> },
    { name: "Cloud Functions", icon: <TbCloudComputing color="#4285F4" /> },
    { name: "Docker", icon: <SiDocker color="#2496ED" /> },
    { name: "CI/CD", icon: <TbBrandGithubCopilot color="#2088FF" /> },
    { name: "PWA", icon: <SiPwa color="#5A0FC8" /> },
    { name: "REST APIs", icon: <TbApi color="#007ACC" /> },
    { name: "Swagger", icon: <SiSwagger color="#85EA2D" /> },
    { name: "Git", icon: <SiGit color="#F05032" /> }
  ];

  return (
    <div id="skills">
      <div className="divider"></div>
      <div className="title">Skills</div>
      <Marquee pauseOnHover={true} speed={50} gradient={false}>
        {skillsData.map((skill, index) => (
          <div className="skill-box" key={index}>
            <div className="skill-icon-wrapper">
              {skill.icon}
            </div>
            <p>{skill.name}</p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Skills;