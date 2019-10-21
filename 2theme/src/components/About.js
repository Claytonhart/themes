import React from "react";
import AboutItem from "./AboutItem";

import img1 from "../images/about-1.jpg";
import img2 from "../images/about-2.jpg";
import img3 from "../images/about-3.jpg";
import img4 from "../images/about-4.jpg";

const About = () => {
  const aboutItem = [
    {
      date: "2009-2011",
      title: "Our Humble Beginnings",
      img: img1
    },
    {
      date: "March 2011",
      title: "An Agency is Born",
      img: img2
    },
    {
      date: "December 2012",
      title: "Transition to Full Service",
      img: img3
    },
    {
      date: "July 2014",
      title: "Phase Two Expansion",
      img: img4
    }
  ];
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-header">
          <h3 className="about-header__title">About</h3>
          <p className="about-header__desc">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        <ul className="about-timeline">
          {aboutItem.map((item, i) => {
            return (
              <AboutItem key={item.date} {...item} inverted={i % 2 !== 0} />
            );
          })}
          <li className="about-item">
            <div className="about-item-img about-item-img--yellow">
              <p>
                Be Part<br></br> Of Our<br></br> Story!
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
