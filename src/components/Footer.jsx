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
      <div class="card">
        <span>Social</span>
        <a class="social-link" href="https://www.instagram.com/bengalesummit?igsh=MWt6bjAwcTNuMzJyYg==">
          <svg fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm8.5 1.5h-8.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm-4.25 3.75A5.5 5.5 0 1 1 6.5 12.75 5.51 5.51 0 0 1 12 7.25zm0 1.5A4 4 0 1 0 16 12.75 4 4 0 0 0 12 8.75zm5.25-.5a1.125 1.125 0 1 1-1.125-1.125A1.13 1.13 0 0 1 17.25 8.25z"></path>
          </svg>
        </a>
        <a class="social-link" href="https://www.facebook.com/profile.php?id=61560898934811&mibextid=ZbWKwL">
          <svg fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 12.07c0-5.52-4.48-10-10-10s-10 4.48-10 10c0 5 3.66 9.12 8.44 9.88v-6.99h-2.54v-2.89h2.54v-2.2c0-2.51 1.5-3.89 3.78-3.89 1.09 0 2.24.19 2.24.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.79l-.45 2.89h-2.34v6.99c4.78-.76 8.44-4.88 8.44-9.88z"></path>
          </svg>
        </a>
        <a class="social-link" href="https://x.com/BengalEsummit?t=LLrSXFuhlzBoWCcRQX4uPg&s=09">
          <svg fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775a4.932 4.932 0 0 0 2.163-2.723c-.951.555-2.005.96-3.127 1.179a4.916 4.916 0 0 0-8.384 4.482A13.95 13.95 0 0 1 1.671 3.149a4.935 4.935 0 0 0 1.523 6.573 4.902 4.902 0 0 1-2.229-.616v.061a4.927 4.927 0 0 0 3.946 4.827 4.903 4.903 0 0 1-2.224.085 4.935 4.935 0 0 0 4.604 3.417 9.869 9.869 0 0 1-6.102 2.104c-.397 0-.79-.023-1.177-.069a13.935 13.935 0 0 0 7.548 2.212c9.057 0 14.009-7.497 14.009-13.986 0-.213-.005-.425-.014-.636a9.936 9.936 0 0 0 2.457-2.548l-.047-.02z"></path>
          </svg>
        </a>
        <a class="social-link" href="https://www.linkedin.com/in/bengal-e-summit-32394b315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
          <svg fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.98 3.5C4.98 2.12 6.11 1 7.5 1s2.52 1.12 2.52 2.5-1.12 2.5-2.52 2.5-2.52-1.12-2.52-2.5zm.06 4.5h4.9V22h-4.9V8zm7.26 0h4.7v2.14c.67-1.01 2.1-2.47 4.35-2.47 3.16 0 5.59 2.07 5.59 6.48V22h-4.9v-7.34c0-1.75-.35-3.49-2.47-3.49-2.13 0-2.46 1.78-2.46 3.46V22h-4.91V8z"></path>
          </svg>
        </a>
      </div>

      <p className="footer-text">© 2024 Your Company. All rights reserved.</p>
    </div>
  );
};

export default Footer;
