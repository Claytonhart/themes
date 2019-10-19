import React from "react";

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services-container">
          <div className="services-title">
            <h4 className="services-title__header">Services</h4>
            <p className="services-title__desc">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
          <div className="services-items">
            <div className="services-item">
              <span className="fa-stack services-item__i-container">
                <i className="fas fa-circle fa-stack-2x text-primary services-item__circle"></i>
                <i className="fas fa-shopping-cart fa-stack-1x fa-inverse  services-item__img"></i>
              </span>
              <h5 className="services-item__title">E-Commerce</h5>
              <p className="services-item__desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt saepe mollitia necessitatibus similique assumenda hic
                consectetur, minima impedit.
              </p>
            </div>
            <div className="services-item">
              <span className="fa-stack services-item__i-container">
                <i className="fas fa-circle fa-stack-2x text-primary services-item__circle"></i>
                <i className="fas fa-laptop fa-stack-1x fa-inverse  services-item__img"></i>
              </span>
              <h5 className="services-item__title">Responsive Design</h5>
              <p className="services-item__desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt saepe mollitia necessitatibus similique assumenda hic
                consectetur, minima impedit.
              </p>
            </div>
            <div className="services-item">
              <span className="fa-stack services-item__i-container">
                <i className="fas fa-circle fa-stack-2x text-primary services-item__circle"></i>
                <i className="fas fa-lock fa-stack-1x fa-inverse  services-item__img"></i>
              </span>
              <h5 className="services-item__title">Web Security</h5>
              <p className="services-item__desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt saepe mollitia necessitatibus similique assumenda hic
                consectetur, minima impedit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
