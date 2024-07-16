import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <div className="company-info">
          <div className="logo">
            <h2>
              <span className='logospan1'> Food</span>
              <span className='logospan2'> Court</span>
            </h2>
          </div>
          <p>"Explore our food court's diverse menu for convenient, delicious, and fresh meals available 24/7, with quick online ordering and seamless delivery or pickup options."</p>
        </div>
        <div className="links-section">
          <h3 style={{color:'white',margin:'0px',fontWeight:"900"}}>Useful Links</h3>
          <ul>
            <li>Pricing</li>
            <li>Orders</li>
            <li>Settings</li>
            <li>Help</li>
          </ul>
        </div>
        <div className="contact-info">
          <h3 style={{color:'white',margin:'0px',fontWeight:"900"}}>Contact Information</h3>
          <p>Address: 123 Main St, City, Country</p>
          <p>Email: info@example.com</p>
          <p>Phone: +1234567890</p>
        </div>
      </div>
      <hr className="footer-divider" />
      <div className="copyright">
        <p>Web Developer&copy; 2024 Limited</p>
      </div>
    </footer>
  );
};

export default Footer;
