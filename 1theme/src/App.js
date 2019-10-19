import React from "react";
import Navbar from "./components/Navbar";
import Masthead from "./components/Masthead";
import Features from "./components/Features";
import Showcase from "./components/Showcase";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Masthead />
      <Features />
      <Showcase />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
