import React, { useState } from "react";
import "./Testing.css";

const Navbar = () => {
  const toggleMenu = () => document.body.classList.toggle("open");
  return (
    <>
    <button className="burger" onClick={toggleMenu}></button>
    <div className="background"></div>
    <div className="menu">
      <nav>
        <a style={{ animationDelay: "0.2s" }}>About</a>
        <a style={{ animationDelay: "0.3s" }}>Portfolio</a>
        <a style={{ animationDelay: "0.4s" }}>Services</a>
        <a style={{ animationDelay: "0.5s" }}>Contact</a>
      </nav>
    </div>
  </>
  );
}

function Home() {
  return (
    <section className="home">
      <div className="text">Series</div>
    </section>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

export default App;
