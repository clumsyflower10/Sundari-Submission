import React from "react";
import heroImage from "../Assets/heroImage.png";
import { BiSolidPhoneCall } from "react-icons/bi";

const Home = () => {
  const whatsappNumber = "+628322063397";

  return (
    <div name="Home" className="min-h-screen w-full bg-[rgb(171,175,124)] ">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center mt-20 md:mt-0 h-full">
          <h2 className="text-4xl sm:text-6xl font-bold text-yellow-400">
            Feel Natural, Feel You.
          </h2>

          <p className="text-green-900 ml-2 max-w-md">
            Experience Authentic Balinese Bliss: Our Organic Spa, Where Nature
            Meets Tradition. Immerse in Home-Made Elixirs and Holistic Therapies
            for Mind, Body, Soul Rejuvenation.
          </p>

          <div>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="group text-green-900 font-bold w-fit px-6 py-3 my-2 flex items-center hover:scale-105 duration-300 rounded-md bg-gradient-to-r from-orange-400 to bg-yellow-400 cursor-pointer">
                Book your appointment
                <span className="group-hover:rotate-45 duration-300">
                  <BiSolidPhoneCall size={20} className="ml-1" />
                </span>
              </button>
            </a>
          </div>
        </div>

        <div className="md:w-1/2 bg-[rgb(171,175,124)]">
          <img
            src={heroImage}
            alt="heroImage"
            className="mx-auto w-2/3 md:w-full mt-10 py-10"
          />
          <div className="flex flex-col justify-center items-end bg-[rgb(171,175,124)]">
            <p className="px-6 text-green-900 max-w-md text-lg ml-[-20px]">
              <span className="font-bold italic text-yellow-400">Sundari</span>{" "}
              is a
              <span className="font-bold italic text-yellow-400">
                {" "}
                holistic
              </span>{" "}
              spa which provides a variety of services for the purpose of{" "}
              <span className="font-bold">
                improving health, beauty, and relaxation
              </span>{" "}
              through
              <span className="font-bold italic text-yellow-400">
                organic
              </span>{" "}
              personal care treatments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
