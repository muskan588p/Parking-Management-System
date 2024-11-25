import React from 'react';
import "../styles/footer.css"; // Optional: Add CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <h2>My Website</h2>
        </div>
        <ul className="social-media-links">
          <li>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          </li>
          <li>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          </li>
          <li>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} My Website. Built with ❤️ by [Your Name]</p>
        <ul className="footer-navigation">
          <li>
            <a href="#about-us">About Us</a>
          </li>
          <li>
            <a href="#careers">Careers</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
