import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="thank-you">
          <h2 className="animated-text">Thanks for visiting! </h2>
         
        </div>
        <div className="footer-links">
          <a href="#" className="footer-link">Home</a>
          <a href="#" className="footer-link">About</a>
          <a href="#" className="footer-link">Projects</a>
          <a href="#" className="footer-link">Contact</a>
        </div>
        <div className="social-links">
          <a href="https://github.com/KewalSinghJaryal" className="social-link" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/kewal-singh-jaryal-9a269b260/" className="social-link" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://x.com/K3w4lwastaken" className="social-link" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2024 Kewal Singh Jaryal. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;