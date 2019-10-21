import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Masthead from "./components/Masthead";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Team from "./components/Team";

function App() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    window.addEventListener("scroll", setActiveSection);

    return () => {
      window.removeEventListener("scroll", setActiveSection);
    };
  }, []);

  const setActiveSection = () => {
    // let scrollPosY = window.pageYOffset | document.body.scrollTop;
    // const sections = [services, portfolio, about, team, contact];
    let headerHeight = document.getElementById("header").clientHeight;

    let servicesPos = document
      .getElementById("services")
      .getBoundingClientRect().top;
    let portfolioPos = document
      .getElementById("portfolio")
      .getBoundingClientRect().top;
    let aboutPos = document.getElementById("about").getBoundingClientRect().top;
    let teamPos = document.getElementById("team").getBoundingClientRect().top;

    if (teamPos <= headerHeight) {
      setActive("team");
    } else if (aboutPos <= headerHeight) {
      setActive("about");
    } else if (portfolioPos <= headerHeight) {
      setActive("portfolio");
    } else if (servicesPos <= headerHeight) {
      setActive("services");
    } else {
      setActive(null);
    }
  };

  return (
    <div className="App">
      <Header active={active} />
      <Masthead />
      <Services />
      <Portfolio />
      <About />
      <Team />
    </div>
  );
}

export default App;
