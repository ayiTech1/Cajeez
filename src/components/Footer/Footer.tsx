import React from 'react';
import './Footer.css';
import FooterLinks from './FooterLinks';
import SocialLinks from './SocialLinks';
import Copyright from './Copyright';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          Connecting talent and opportunities with ease. Join us to explore, grow, and achieve
          success.
        </p>
        <SocialLinks />
      </div>
      <FooterLinks />
      <div className="footer-bottom">
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
