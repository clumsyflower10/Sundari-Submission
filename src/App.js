import React from "react";
import HomeNavBar from "./Components/HomeNavBar";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ServicesPage from "./Pages/ServicesPage";
import TeamPage from "./Pages/TeamPage";
import ContactPage from "./Pages/ContactPage";
import ReviewsPage from "./Pages/ReviewsPage";
import NotFoundPage from "./Pages/NotFoundPage";

function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <HomePage />;
      break;
    case "/About":
      component = <AboutPage />;
      break;
    case "/Services":
      component = <ServicesPage />;
      break;
    case "/Team":
      component = <TeamPage />;
      break;
    case "/Reviews":
      component = <ReviewsPage />;
      break;
    case "/Contact":
      component = <ContactPage />;
      break;
    default:
      component = <NotFoundPage />;
  }

  return (
    <>
      <HomeNavBar />
      {component}
    </>
  );
}

export default App;
