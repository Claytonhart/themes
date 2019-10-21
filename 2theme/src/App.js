import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Masthead from "./components/Masthead";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";

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

    if (servicesPos <= headerHeight) {
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
    </div>
  );
}

export default App;
