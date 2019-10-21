import React from "react";
import bgImg from "../images/map-image.png";

const Contact = () => {
  return (
    <section className="contact" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="container">
        <div className="contact-header">
          <h3 className="contact-header__header">Contact us</h3>
          <p className="contact-header__desc">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        <form onSubmit={() => console.log("submit")} className="contact-form">
          <div className="contact-form-left">
            <input
              type="text"
              className="contact-form-left__input"
              placeholder="Your Name *"
            />
            <input
              type="text"
              className="contact-form-left__input"
              placeholder="Your Email *"
            />
            <input
              type="text"
              className="contact-form-left__input"
              placeholder="Your Phone *"
            />
          </div>
          <div className="contact-form-right">
            <textarea
              className="contact-form-right__input"
              placeholder="Your Message *"
            />
          </div>
        </form>
        <a href="#!" className="btn contact-btn">
          Send message
        </a>
      </div>
    </section>
  );
};

export default Contact;
