import React from 'react';
import HAT from "../Icons/mortarboard.svg"
import Case from "../Icons/suitcase-lg-fill.svg"
import './Resume.css';

const ResumeItem = ({ title, date, organization, description }) => (
  <div className="resume-item" style={{paddingBottom:""}}>
    <div className="resume-item-dot"></div>
    <h3 className="resume-item-title">{title}</h3>
    <p className="resume-item-date">{date}</p>
    <p className="resume-item-org">{organization}</p>
    <p className="resume-item-desc">{description}</p>
  </div>
);

const Resume = () => {
  const experienceData = [
    {
      title: "Web Developer",
      date: "August 2023 - Present",
      organization: "Bumppy Media",
      description: "As a Web Developer, I have been deeply involved in creating and refining various components, designing intuitive landing pages, and contributing to the development of The Anlook, a WhatsApp marketing tool aimed at enhancing customer engagement. My role has allowed me to merge creativity with technical expertise, ensuring the delivery of high-quality web solutions."
    },
    {
      title: "Component Designer",
      date: "January 2023 - August 2023",
      organization: "Technobeado pvt ltd.",
      description: "As an intern at Techbeado, I have designed various components, integrated APIs, and managed API calls. My role allowed me to develop hands-on experience in building efficient and scalable solutions, contributing to the success of multiple projects."
    }
  ];

  const educationData = [
    {
      title: "Bachelor of Technology",
      date: "2020 - 2023",
      organization: "Guru Gobind Singh Indraprastha University",
      description: "From ADGITM i Completed my B.tech in Mechanical Engineering. Time period of three years. "
    },
    {
      title: "Diploma of Mechanical Engineering",
      date: "2017 - 2020",
      organization: "Pusa Institute Of Technology",
      description: "From Pusa Institute Of Technology i Completed my Diploma in Mechanical Engineering. Time period of three years and took part in multiple trainig program. "
    }
  ];

  return (
    <div id="resume"className="resume-container">
      <h2 className="resume-title">RESUME</h2>
      <hr />
      <div className="resume-content">
        <div className="resume-section">
          <p className="" style={{fontSize:'2rem' , color:"#ffd700",}}>
          <span className="icon-placeholder"><img  src={Case} alt="" /></span>
            Experience
          </p>
          <div className="resume-timeline">
            {experienceData.map((item, index) => (
              <ResumeItem key={index} {...item} />
            ))}
          </div>
        </div>
        <div className="resume-section">
        <p className="" style={{fontSize:'2rem' , color:"#ffd700"}}>
            <span className="icon-placeholder"><img src={HAT} alt="" /></span>
            Education
          </p>
          <div className="resume-timeline">
            {educationData.map((item, index) => (
              <ResumeItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;