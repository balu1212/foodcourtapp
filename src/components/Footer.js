import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <div className="company-info">
          <h3>Company Name</h3>
          <p>Description of the company goes here.</p>
        </div>
        <div className="links-section">
          <h3>Useful Links</h3>
          <ul>
           
          </ul>
        </div>
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>Address: 123 Main St, City, Country</p>
          <p>Email: info@example.com</p>
          <p>Phone: +1234567890</p>
        </div>
      </div>
      <hr className="footer-divider" />
      <div className="copyright">
        <p>&copy; 2024 Limited</p>
      </div>
    </footer>
  );
};

export default Footer;
