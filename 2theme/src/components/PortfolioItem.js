import React, { useState } from "react";
import Modal from "../components/Modal";

const PortfolioItem = ({ img: { thumbnail, full }, title, desc, i }) => {
  const [isVisible, setIsVisible] = useState(false);

  const openModal = () => {
    setIsVisible(true);
  };

  return (
    <div className="portfolio-item">
      <Modal
        img={full}
        isVisible={isVisible}
        onClose={() => setIsVisible(false)}
      />
      <div onClick={openModal} className="portfolio-item__img-wrapper">
        <img
          src={thumbnail}
          alt="portfolio item"
          className="portfolio-item__img"
        />
        <div className="portfolio-item__img-overlay">
          <i className="fas fa-plus fa-6x portfolio-item__img-icon"></i>
        </div>
      </div>
      <div className="portfolio-item__about">
        <h4 className="portfolio-item__header">{title}</h4>
        <p className="portfolio-item__desc">{desc}</p>
      </div>
    </div>
  );
};

export default PortfolioItem;
