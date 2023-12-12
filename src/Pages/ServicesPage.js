import React from "react";
import Services from "../Components/Services";
import Footer from "../Components/Footer";
import ServicesDetails from "../Components/ServicesDetails";
import Reviews from "../Components/Reviews";

const ServicesPage = () => {
  return (
    <div>
      <Services />
      <ServicesDetails />
      <Reviews />
      <Footer />
    </div>
  );
};

export default ServicesPage;
