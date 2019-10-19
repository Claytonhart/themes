import React from "react";

const Masthead = () => {
  return (
    <section className="masthead">
      <div className="container">
        <div className="masthead-content">
          <div className="masthead-content__title">Welcome to our studio!</div>
          <div className="masthead-content__header">It's nice to meet you</div>
          <a href="#services" className="masthead-content__btn btn">
            Tell me more
          </a>
        </div>
      </div>
    </section>
  );
};

export default Masthead;
