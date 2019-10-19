import React from "react";

const ShowcaseItem = ({ order = 1, index, title, desc, img }) => {
  // every second item display image on left
  if (index % 2 !== 0) {
    order = -1;
  }

  return (
    <div className="showcase-item">
      <div
        className="showcase-item-img"
        style={{
          order: order,
          backgroundImage: `url(${img})`,
          backgroundSize: "cover"
        }}
      ></div>
      <div className="showcase-item-text">
        <div className="showcase-item-text__container">
          <h3 className="showcase-item-text__header">{title}</h3>
          <p className="showcase-item-text__desc">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseItem;
