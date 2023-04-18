import React, { useState } from "react";
import "./Menu.css";
import Carousel from "./carousel";
import Cards from "./Cards";

const Menu = () => {
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
      <div class="alert alert-success" role="alert">
        Checkout Our New Series!
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <Menu />
      <Home />
      <Carousel />
      <Cards />
    </>
  );
}

export default App;
