import React from "react";
import img1 from "../images/01-thumbnail.jpg";
import img2 from "../images/02-thumbnail.jpg";
import img3 from "../images/03-thumbnail.jpg";
import img4 from "../images/04-thumbnail.jpg";
import img5 from "../images/05-thumbnail.jpg";
import img6 from "../images/06-thumbnail.jpg";

import imgFull1 from "../images/01-full.jpg";
import imgFull2 from "../images/02-full.jpg";
import imgFull3 from "../images/03-full.jpg";
import imgFull4 from "../images/04-full.jpg";
import imgFull5 from "../images/05-full.jpg";
import imgFull6 from "../images/06-full.jpg";

import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
  const portfolioItems = [
    {
      img: { thumbnail: img1, full: imgFull1 },
      title: "Threads",
      desc: "Illustration"
    },
    {
      img: { thumbnail: img2, full: imgFull2 },
      title: "Explore",
      desc: "Graphic Design"
    },
    {
      img: { thumbnail: img3, full: imgFull3 },
      title: "Finish",
      desc: "Identity"
    },
    {
      img: { thumbnail: img4, full: imgFull4 },
      title: "Lines",
      desc: "Branding"
    },
    {
      img: { thumbnail: img5, full: imgFull5 },
      title: "Southwest",
      desc: "Website Design"
    },
    {
      img: { thumbnail: img6, full: imgFull6 },
      title: "Window",
      desc: "Photography"
    }
  ];

  return (
    <section className="portfolio">
      <div className="container">
        <div className="portfolio-desc">
          <h2 className="portfolio-desc__header">Portfolio</h2>
          <p className="portfolio-desc__desc">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        <div className="portfolio-image-gallery">
          {portfolioItems.map((item, i) => {
            return <PortfolioItem key={i} {...item} i={i} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
