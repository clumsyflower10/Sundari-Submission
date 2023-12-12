import React from "react";
import hand from "../Assets/hand.jpg";
import head from "../Assets/head.jpg";
import mask from "../Assets/mask.jpg";
import MenuImage from "../Assets/Menu.png";

const Services = () => {
  const downloadMenu = () => {
    const link = document.createElement("a");
    link.href = MenuImage;
    link.download = "menu.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div name="Services" className="bg-[rgb(171,175,124)] w-full md:h-screen">
      <div className="max-w-screen-lg p-6 mx-auto flex flex-col items-center justify-center w-full h-full">
        <div className="pb-8">
          <h1 className="text-yellow-400 text-4xl font-bold pt-4">
            What we can do for you
          </h1>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 px-2 sm:px-0 pb-6">
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={hand}
              alt=""
              className="rounded-md duration-200 hover:scale-105"
            />
            <div className="flex items-center justify-center">
              <p className="w-1/2 px-6 py-3 duration-200 hover:scale-105 text-green-900 text-center">
                Body treatments
              </p>
            </div>
          </div>

          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={head}
              alt=""
              className="rounded-md duration-200 hover:scale-105"
            />
            <div className="flex items-center justify-center">
              <p className="w-1/2 px-6 py-3 duration-200 hover:scale-105 text-green-900 text-center">
                Hair & Scalp treatments
              </p>
            </div>
          </div>

          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={mask}
              alt=""
              className="rounded-md duration-200 hover:scale-105"
            />
            <div className="flex items-center justify-center">
              <p className="w-1/2 px-6 py-3 duration-200 hover:scale-105 text-green-900 text-center">
                Facial treatments
              </p>
            </div>
          </div>
        </div>

        <button
          className="text-green-900 font-bold w-fit px-3 py-3 flex items-center hover:scale-105 duration-300 rounded-md bg-gradient-to-r from-orange-400 to bg-yellow-400 cursor-pointer"
          onClick={downloadMenu}
        >
          Click for full treatment menu
        </button>
      </div>
    </div>
  );
};

export default Services;
