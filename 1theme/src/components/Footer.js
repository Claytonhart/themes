import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer-left">
          <ul className="footer-about">
            <li className="footer-about__item">About</li>
            <li className="footer-about__item">Contact</li>
            <li className="footer-about__item">Terms of Use</li>
            <li className="footer-about__item">Privacy Policy</li>
          </ul>
          <p className="footer-left__desc">
            © Your Website 2019. All Rights Reserved.
          </p>
        </div>
        <div className="footer-right">
          <div className="footer-right__images">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
