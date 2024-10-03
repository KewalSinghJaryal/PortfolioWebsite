import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Chrome,
  Code,
  Tv,
  Italic,
  Gamepad,
} from "lucide-react";
import "./Projects.css";

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A responsive portfolio website showcasing my projects and skills.",
    tech: [
      "React",
      "Framer Motion",
      "Lucid React",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    icon: <Code className="project-icon" />,
    color: "linear-gradient(135deg, #ffdd00, #000000)",
    link: "https://kewalsinghjaryal.netlify.app/",
  },
  {
    id: 2,
    title: "Google Accounts U.I Clone",
    description:
      "A full-stack e-commerce solution with user authentication and payment integration.",
    tech: ["Node.js", "Express", "MongoDB", "React"],
    icon: <Chrome className="project-icon" />,
    color: "linear-gradient(135deg, #4285F4, #ffffff)",
    link: "https://github.com/yourusername/ecommerce-platform",
  },
  {
    id: 3,
    title: "K3 SnapNews",
    description: "An online code editor with real-time collaboration features.",
    tech: ["JavaScript", "Socket.io", "CodeMirror", "Firebase"],
    icon: <Tv className="project-icon" />,
    color: "linear-gradient(135deg, #ff6600, #ffffff)",
    link: "https://github.com/KewalSinghJaryal/K3Snapnews",
  },
  {
    id: 4,
    title: "Guess The Number",
    description:
      "A full-stack e-commerce solution with user authentication and payment integration.",
    tech: ["Node.js", "Express", "MongoDB", "React"],
    icon: <Gamepad className="project-icon" />,
    color: "linear-gradient(135deg, #808080, #000000)",
    link: "https://github.com/yourusername/ecommerce-platform",
  },
  {
    id: 5,
    title: "Google Accounts U.I Clone",
    description:
      "A full-stack e-commerce solution with user authentication and payment integration.",
    tech: ["Node.js", "Express", "MongoDB", "React"],
    icon: <Italic className="project-icon" />,
    color: "linear-gradient(135deg, #4ECDC4, #ffffff)",
    link: "https://github.com/yourusername/ecommerce-platform",
  },
];

const ProjectCard = ({ project, isActive }) => (
  <motion.div
    className={`project-card ${isActive ? "active" : ""}`}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ duration: 0.5 }}
    style={{ background: project.color }}
    onClick={() => window.open(project.link, "_blank")}
  >
    <div className="project-icon-wrapper">{project.icon}</div>
    <h3>{project.title}</h3>
    <p>{project.description}</p>
    <div className="tech-stack">
      {project.tech.map((tech, index) => (
        <span key={index} className="tech-tag">
          {tech}
        </span>
      ))}
    </div>
  </motion.div>
);

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    let intervalId;
    if (autoplay) {
      intervalId = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
      }, 5000);
    }
    return () => clearInterval(intervalId);
  }, [autoplay]);

  const nextProject = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
    setAutoplay(false);
  };

  const prevProject = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + projectsData.length) % projectsData.length
    );
    setAutoplay(false);
  };

  const handleDragEnd = (event, info) => {
    if (info.offset.x < -100) {
      nextProject();
    } else if (info.offset.x > 100) {
      prevProject();
    } else {
      controls.start({ x: 0 });
    }
  };

  return (
    <div className="projects-container">
      <h2 className="projects-title">My Projects</h2>

      <div className="projects-carousel">
        <button className="nav-button prev" onClick={prevProject}>
          <ChevronLeft />
        </button>
        <motion.div
          className="project-card-container"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
          animate={controls}
        >
          <AnimatePresence mode="wait">
            <ProjectCard
              key={activeIndex}
              project={projectsData[activeIndex]}
              isActive={true}
            />
          </AnimatePresence>
        </motion.div>
        <button className="nav-button next" onClick={nextProject}>
          <ChevronRight />
        </button>
      </div>
      <div className="project-indicators">
        {projectsData.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === activeIndex ? "active" : ""}`}
            onClick={() => {
              setActiveIndex(index);
              setAutoplay(false);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
