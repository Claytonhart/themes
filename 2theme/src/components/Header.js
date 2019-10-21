import React, { useEffect } from "react";
import { Link } from "react-scroll";

const Header = ({ active }) => {
  const items = ["services", "portfolio", "about", "team", "contact"];

  useEffect(() => {
    window.addEventListener("scroll", resizeHeaderOnScroll);

    return () => {
      window.removeEventListener("scroll", resizeHeaderOnScroll);
    };
  }, []);

  const resizeHeaderOnScroll = () => {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 120,
      headerEl = document.getElementById("header");

    if (distanceY > shrinkOn) {
      headerEl.classList.add("smaller");
    } else {
      headerEl.classList.remove("smaller");
    }
  };

  return (
    <header className="header" id="header">
      <div className="container">
        <div className="header-container">
          <h1 className="header__title">Start Bootstrap</h1>
          <ul className="header-items">
            {items.map(item => {
              if (active === item) {
                return (
                  <Link
                    to={item}
                    smooth={true}
                    key={item}
                    className="header-items__item header-items__item--active"
                    offset={-54}
                  >
                    {item}
                  </Link>
                );
              } else {
                return (
                  <Link
                    to={item}
                    smooth={true}
                    key={item}
                    className="header-items__item"
                    offset={-54}
                  >
                    {item}
                  </Link>
                );
              }
            })}
            {/* <li className="header-items__item">services</li>
            <li className="header-items__item">portfolio</li>
            <li className="header-items__item">about</li>
            <li className="header-items__item">team</li>
            <li className="header-items__item">contact</li> */}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
