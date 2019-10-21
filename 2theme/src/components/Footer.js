import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-container">
          <p className="footer-copyright">Copyright © Your Website 2019</p>
          <ul className="footer-profile-socials">
            <i className="fab fa-twitter"></i>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-linkedin-in"></i>
          </ul>
          <div className="footer-privacy-policy">
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
