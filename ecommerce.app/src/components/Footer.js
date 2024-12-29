import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="/" className="footer-link">Home</a>
          <a href="/about" className="footer-link">About</a>
          <a href="/contact" className="footer-link">Contact</a>
          <a href="/privacy" className="footer-link">Privacy Policy</a>
        </div>
        <div className="footer-social">
          <a href="https://facebook.com" className="social-icon" target="_blank" rel="noopener noreferrer">
            <img src="https://static.vecteezy.com/system/resources/previews/042/127/197/non_2x/app-style-blue-facebook-logo-with-white-thick-border-and-long-shadow-on-a-transparent-background-free-png.png" alt="Facebook" />
          </a>
          <a href="https://twitter.com" className="social-icon" target="_blank" rel="noopener noreferrer">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9jkc2rDXDgUadA91sz0nE413EfWFiYkcVZg&s" alt="Twitter" />
          </a>
          <a href="https://instagram.com" className="social-icon" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" alt="Instagram" />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 My E-commerce Store. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
