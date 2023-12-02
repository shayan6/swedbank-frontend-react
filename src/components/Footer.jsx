import React from 'react';
import '../styles/footer.css';
import SocialMediaIcons from './SocialMediaIcons';

const Footer = () => {
  return (
    <footer>
      <div className="footer-column">
        <h3>Contact</h3>
        <h1>6 310 310</h1>
        <p>info@swedbank.ee</p>
        <p>SWEDBANK AS</p>
        <p>Livalaia 8. 15040 Tallinn SWIFT kood/BIC: HABAEE2X Reg. number: 10060701</p>
        <SocialMediaIcons />
      </div>
      <div className="footer-column">
        <h3>Quicklinks</h3>
        <p>► Calculators.</p>
        <p>► Prices.</p>
        <p>► Terms of service.</p>
        <p>► Privacy and security.</p>
      </div>
      <div className="footer-column">
        <h3>Join Swedbank</h3>
        <p>► Client programs.</p>
        <p>► Business customers</p>
        <p>► Jobs</p>
        <p>► Internships</p>
      </div>
      <div className="footer-column">
        <h3>Tooted</h3>
        <p>► Everyday banking.</p>
        <p>► Loans.</p>
        <p>► Insurance.</p>
        <p>► Cards.</p>
        <p>► Stocks.</p>
      </div>
    </footer>
  );
};

export default Footer;
