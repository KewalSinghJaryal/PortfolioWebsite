import React from 'react';
import './Services.css';
import { FaReact, FaPalette, FaPlug, FaCss3Alt, FaJs, FaMobileAlt } from 'react-icons/fa';

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="service-card">
    <div className="icon-container">
      <Icon className="icon" />
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const Services = () => {
  const services = [
    { 
      icon: FaReact,
      title: "React App", 
      description: "React is a JavaScript library for building interactive user interfaces, especially single-page applications. It enables the creation of reusable components, efficient state management, and seamless UI updates, making it ideal for developing complex, responsive applications." 
    },
    { 
      icon: FaPalette,
      title: "UI/UX Development", 
      description: "UI/UX development focuses on crafting user interfaces that are not only visually appealing but also intuitive and user-friendly. It involves designing layouts, selecting color schemes, and creating interactive elements that enhance the user experience, ensuring that the final product is both functional and enjoyable to use." 
    },
    { 
      icon: FaPlug,
      title: "Api Integration", 
      description: "API integration involves connecting different software systems by allowing them to communicate with each other. This skill focuses on seamlessly linking applications to external services, enabling data exchange, and enhancing the functionality of the product by leveraging third-party tools and platforms." 
    },
    { 
      icon: FaCss3Alt,
      title: "CSS Style & Animations", 
      description: "CSS animation and styling involve designing and animating web elements to enhance user experience. This skill focuses on creating visually appealing interfaces by applying advanced styling techniques and dynamic effects, making interfaces more interactive and engaging." 
    },
    { 
      icon: FaJs,
      title: "Javascript", 
      description: "JavaScript involves adding dynamic behavior and interactivity to web pages. This skill focuses on manipulating the Document Object Model (DOM), handling user events, and integrating with APIs to create responsive and interactive web applications." 
    },
    { 
      icon: FaMobileAlt,
      title: "Responsive Design", 
      description: "Responsive design involves creating web layouts that adapt seamlessly to various screen sizes and devices. This skill focuses on using flexible grids, media queries, and responsive images to ensure a consistent and optimal user experience across desktops, tablets, and smartphones." 
    },
  ];

  return (
    <div id='skills' className="services-container">
      <h2 className="services-title">SKILLS</h2>
      <hr />
      <div className="services-grid" style={{marginTop:"2rem"}}>
        {services.map((service, index) => (
          <ServiceCard 
            key={index} 
            icon={service.icon} 
            title={service.title} 
            description={service.description} 
          />
        ))}
      </div>
    </div>
  );
};

export default Services;