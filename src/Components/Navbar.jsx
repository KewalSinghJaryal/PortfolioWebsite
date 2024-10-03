import React, { useState, useEffect } from 'react';
import kj from "../Icons/Kewal Jaryal 72 x 72.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={kj} alt="Logo" />
        KEWAL
      </div>
      <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '✕' : '☰'}
      </button>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <a href="#" onClick={() => setIsOpen(false)}>HOME</a>
        <a href="#about" onClick={() => setIsOpen(false)}>ABOUT</a>
        <a href="#resume" onClick={() => setIsOpen(false)}>RESUME</a>
        <a href="#skills" onClick={() => setIsOpen(false)}>SKILLS</a>
        <a href="#contact" onClick={() => setIsOpen(false)}>CONTACT</a>
        <a href="tel:+919266662001" className="phone-link" onClick={() => setIsOpen(false)}>+91 9266662001</a>
      </div>
    </nav>
  );
};

export default Navbar;