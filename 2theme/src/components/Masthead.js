import React from "react";
import { Link } from "react-scroll";

const Masthead = () => {
  return (
    <section className="masthead">
      <div className="container">
        <div className="masthead-content">
          <div className="masthead-content__title">Welcome to our studio!</div>
          <div className="masthead-content__header">It's nice to meet you</div>
          <Link
            to="services"
            smooth={true}
            duration={500}
            offset={-54}
            className="masthead-content__btn btn"
          >
            Tell me more
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Masthead;
