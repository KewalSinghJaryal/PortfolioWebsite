import React from 'react';
import './MySkills.css';

const MySkills = () => {
  const skills = [
    { name: 'Front End Devlopment', percentage: 75 },
    { name: 'UI Building', percentage: 85 },
    { name: 'Html & CSS', percentage: 90 },
    { name: 'UX Design', percentage: 85 },
    { name: 'JavaScript', percentage: 80 },
    { name: 'AI usage', percentage: 90 },
  ];

  return (
    <div className="my-skills">
      <h2 className="skills-title">MY SKILLS</h2>
    <hr />
      <div className="skills-content">
        <div className="skills-text">
          <h3>All the skills that I have in that field of work are mentioned.</h3>
          <p>My diverse skill set spans across front-end development, UI building, and the use of advanced technologies like AI. With expertise in JavaScript, HTML, and CSS, I craft visually appealing and user-friendly interfaces. My strong foundation in logic building ensures that the code I write is both efficient and scalable, enabling me to create powerful, interactive web applications. The progress bars below highlight my proficiency in these areas.</p>
          
        </div>
        <div className="skills-bars">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.percentage}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MySkills;