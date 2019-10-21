import React from "react";

const AboutItem = ({ date, title, img, inverted }) => {
  let textClassName = `about-item-text`;
  if (inverted) {
    textClassName = `about-item-text about-item-text--right`;
  }
  return (
    <li className="about-item">
      <div className={textClassName}>
        <h3 className="about-item-text__header">{date}</h3>
        <h3 className="about-item-text__header">{title}</h3>
        <p className="about-item-text__desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut
          voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam,
          recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium
          consectetur!
        </p>
      </div>
      <img src={img} alt="about" className="about-item-img" />
    </li>
  );
};

export default AboutItem;
