import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Masthead from "./components/Masthead";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Team from "./components/Team";
import Brands from "./components/Brands";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    window.addEventListener("scroll", setActiveSection);

    let _throttleTimer = null;
    let _throttleDelay = 100;

    function setActiveSection() {
      clearTimeout(_throttleTimer);
      _throttleTimer = setTimeout(function() {
        let headerHeight = document.getElementById("header").clientHeight;

        let servicesPos = document
          .getElementById("services")
          .getBoundingClientRect().top;
        let portfolioPos = document
          .getElementById("portfolio")
          .getBoundingClientRect().top;
        let aboutPos = document.getElementById("about").getBoundingClientRect()
          .top;
        let teamPos = document.getElementById("team").getBoundingClientRect()
          .top;

        let currentBottom = document.documentElement.getBoundingClientRect()
          .bottom;
        let maxBottom = window.innerHeight;

        if (currentBottom <= maxBottom + 20) {
          setActive("contact");
        } else if (teamPos <= headerHeight) {
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
      }, _throttleDelay);
    }

    return () => {
      window.removeEventListener("scroll", setActiveSection);
    };
  }, []);

  return (
    <div className="App">
      <Header active={active} />
      <Masthead />
      <Services />
      <Portfolio />
      <About />
      <Team />
      <Brands />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
