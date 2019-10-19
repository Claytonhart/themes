import React from "react";

import testimonial1 from "../images/testimonials-1.jpg";
import testimonial2 from "../images/testimonials-2.jpg";
import testimonial3 from "../images/testimonials-3.jpg";

const Testimonials = () => {
  return (
    <section className="testimonials bg-light">
      <h3 className="testimonials__header">What people are saying...</h3>
      <div className="testimonials__container container">
        <div className="testimonial">
          <img
            src={testimonial1}
            alt="testimonial-one"
            className="testimonial__img"
          />
          <h4 className="testimonial__name">Margaret E.</h4>
          <p className="testimonial__desc">
            "This is fantastic! Thanks so much guys!"
          </p>
        </div>
        <div className="testimonial">
          <img
            src={testimonial2}
            alt="testimonial-one"
            className="testimonial__img"
          />
          <h4 className="testimonial__name">Fred S.</h4>
          <p className="testimonial__desc">
            "Bootstrap is amazing. I've been using it to create lots of super
            nice landing pages."
          </p>
        </div>
        <div className="testimonial">
          <img
            src={testimonial3}
            alt="testimonial-one"
            className="testimonial__img"
          />
          <h4 className="testimonial__name">Sarah W.</h4>
          <p className="testimonial__desc">
            "Thanks so much for making these free resources available to us!"
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
