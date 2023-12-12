import React from "react";
import Home from "../Components/Home";
import About from "../Components/About";
import Services from "../Components/Services";
import Slides from "../Components/Slides";
import Footer from "../Components/Footer";
import Team from "../Components/Team";
import Contact from "../Components/Contact";
import Reviews from "../Components/Reviews";

const HomePage = () => {
  return (
    <div>
      <Home />
      <About />
      <Services />
      <Slides />
      <Team />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
