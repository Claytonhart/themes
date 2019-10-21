import React from "react";

import img1 from "../images/team-1.jpg";
import img2 from "../images/team-2.jpg";
import img3 from "../images/team-3.jpg";

const Team = () => {
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="team-about">
          <h3 className="team-about__header">Our Amazing team</h3>
          <p className="team-about__desc">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        <div className="team-profiles">
          <div className="team-profiles-container">
            <div className="team-profile">
              <img
                src={img1}
                alt="team profile"
                className="team-profile__img"
              />
              <h4 className="team-profile__name">Kay Garland</h4>
              <p className="team-profile__title">Lead Designer</p>
              <ul className="team-profile-socials">
                <i className="fab fa-twitter"></i>
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-linkedin-in"></i>
              </ul>
            </div>
            <div className="team-profile">
              <img
                src={img2}
                alt="team profile"
                className="team-profile__img"
              />
              <h4 className="team-profile__name">Larry Parker</h4>
              <p className="team-profile__title">Lead Marketer</p>
              <ul className="team-profile-socials">
                <i className="fab fa-twitter"></i>
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-linkedin-in"></i>
              </ul>
            </div>
            <div className="team-profile">
              <img
                src={img3}
                alt="team profile"
                className="team-profile__img"
              />
              <h4 className="team-profile__name">Diana Pertersen</h4>
              <p className="team-profile__title">Lead Developer</p>
              <ul className="team-profile-socials">
                <i className="fab fa-twitter"></i>
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-linkedin-in"></i>
              </ul>
            </div>
          </div>
          <div className="team-profiles__desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque,
            laboriosam veritatis, quos non quis ad perspiciatis, totam corporis
            ea, alias ut unde.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
