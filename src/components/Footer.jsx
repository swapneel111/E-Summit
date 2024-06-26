import React, { useState, useRef, useEffect } from 'react';
import './Footer.css';

const Footer = () => {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const [show, setShow] = useState(true);

  const controlNavbar = () => {
    if (window.scrollY > windowSize.current[1]) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);

    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, []);

  return (
    <div className={`${show ? 'footer-container' : 'footer-container hidden'}`}>
      <div className="footer-links">
        <a href="https://www.instagram.com/bengalesummit?igsh=MWt6bjAwcTNuMzJyYg==" className="Instagram" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i> Instagram
        </a>
        <a href="https://www.linkedin.com/in/bengal-e-summit-32394b315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="Facebook" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
        <a href="https://www.facebook.com/profile.php?id=61560898934811&mibextid=LQQJ4d" className="Google" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-discord"></i> Facebook
        </a>
        <a href="https://www.youtube.com/" className="Youtube" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-youtube"></i> Youtube
        </a>
        <a href="https://x.com/BengalEsummit?t=LLrSXFuhlzBoWCcRQX4uPg&s=09" className="Twitter" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i> Twitter
        </a>
      </div>
      <p className="footer-text">© 2024 Your Company. All rights reserved.</p>
    </div>
  );
};

export default Footer;
