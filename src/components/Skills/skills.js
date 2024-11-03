import React from 'react'
import './skills.css'
import Marquee from 'react-fast-marquee';
import HTML from '../../assets/skills/html.svg'
import CSS from '../../assets/skills/css.svg'
import JavaScript from '../../assets/skills/js.svg'
import ReactJS from '../../assets/skills/react.svg'
import Node from '../../assets/skills/node.svg'
import PostgreSQL from '../../assets/skills/psql.svg'
import GCP from '../../assets/skills/gcp.svg'
import Git from '../../assets/skills/git.svg'
import Swagger from '../../assets/skills/swagger.svg'
import MaterialUI from '../../assets/skills/materialui.svg'
import Docker from '../../assets/skills/docker.svg'

const Skills = () => {
    const skillsData = [
        { name: "HTML", imgSrc: HTML },
        { name: "CSS", imgSrc: CSS },
        { name: "JavaScript", imgSrc: JavaScript },
        { name: "React.js", imgSrc: ReactJS },
        { name: "Node.js", imgSrc: Node },
        { name: "PostgreSQL", imgSrc: PostgreSQL },
        { name: "GCP", imgSrc: GCP },
        { name: "Git", imgSrc: Git },
        { name: "Swagger Documentation", imgSrc: Swagger },
        { name: "MaterialUI", imgSrc: MaterialUI },
        {name : "Docker", imgSrc : Docker}
    ];
    return (
      <div id="skills">
        <div class="divider"></div>
        <div className="title">Skills</div>
          <Marquee pauseOnHover={true} speed={50} gradient={false}>
              {skillsData.map((skill) => (
                  <div className="skill-box">
                      <img src={skill.imgSrc} alt={skill.name} className="skill-icon" />
                      <p>{skill.name}</p>
                  </div>
              ))}
          </Marquee>
      </div>
  );
};

export default Skills