import React from "react";
import holistic from "../Assets/holistic.jpg";
import masseus from "../Assets/masseus.jpg";
import nail from "../Assets/nail.jpg";
import owner from "../Assets/owner.jpg";
import skinexpert from "../Assets/skinexpert.jpg";
import therapist from "../Assets/therapist.jpg";

const Team = () => {
  const teamMembers = [
    {
      img: holistic,
      text: "Jass Choo, M.S. - Hair Care Scientist",
      linkedin: "https://www.linkedin.com/in/jasschoo/",
    },
    {
      img: therapist,
      text: "Kirana, D.C. - Certified Chiropractor",
      linkedin: "https://www.linkedin.com/in/kiranaserenius/",
    },
    {
      img: nail,
      text: "Olivia Radiance - Licensed Esthetician",
      linkedin: "https://www.linkedin.com/in/oliviaradiance/",
    },
    {
      img: owner,
      text: "Vindy Ephyvania - Holistic Nutritionist",
      linkedin: "https://www.linkedin.com/in/vindyephyvania/",
    },
    {
      img: skinexpert,
      text: "Anne Marrie - Licensed Esthetician",
      linkedin: "https://www.linkedin.com/in/annemarrie/",
    },
    {
      img: masseus,
      text: "Gaby Sane - Master Masseuse",
      linkedin: "https://www.linkedin.com/in/gabysane/",
    },
  ];

  return (
    <div className="bg-[rgb(171,175,124)] w-full md:h-auto pb-4 pt-2">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col items-center justify-center w-full h-full">
        <div>
          <h1 className="text-yellow-400 text-4xl font-bold mb-2">
            Meet Our Specialist
          </h1>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {teamMembers.map(({ img, text, linkedin }, index) => (
            <div
              key={index}
              className="shadow-md shadow-gray-600 rounded-lg mb-8"
            >
              <img
                src={img}
                alt=""
                className="rounded-md w-full h-48 object-cover"
              />
              <div className="flex flex-col items-center justify-center p-4">
                <p className="text-green-900 font-semibold mb-2">{text}</p>
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-4 py-2 bg-green-900 text-yellow-400 text-center rounded-md hover:bg-green-600 transition duration-300"
                >
                  Contact Me
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
