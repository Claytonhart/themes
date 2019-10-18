import React from "react";
import Navbar from "./components/Navbar";
import Masthead from "./components/Masthead";
import Features from "./components/Features";
import Showcase from "./components/Showcase";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Masthead />
      <Features />
      <Showcase />
    </div>
  );
}

export default App;
