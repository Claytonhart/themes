import React from "react";
import envato from "../images/envato.jpg";
import designmodo from "../images/designmodo.jpg";
import themeforest from "../images/themeforest.jpg";
import creativemarket from "../images/creative-market.jpg";

const Brands = () => {
  return (
    <div className="brands">
      <div className="container">
        <div className="brands-container">
          <div className="brand-item">
            <img src={envato} alt="brand item" className="brand-item__img" />
          </div>
          <div className="brand-item">
            <img
              src={designmodo}
              alt="brand item"
              className="brand-item__img"
            />
          </div>
          <div className="brand-item">
            <img
              src={themeforest}
              alt="brand item"
              className="brand-item__img"
            />
          </div>
          <div className="brand-item">
            <img
              src={creativemarket}
              alt="brand item"
              className="brand-item__img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
