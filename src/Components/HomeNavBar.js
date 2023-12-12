import React from "react";
import Logo from "../Assets/logo.png";

export default function NavBar() {
  return (
    <div className="bg-[rgb(171,175,124)]">
      <nav className="flex flex-col md:flex-row justify-between items-center px-6 py-4">
        <a href="/" className="logo">
          <img className="max-w-full" src={Logo} alt="Logo" />
        </a>
        <ul className="flex">
          <li className="cursor-pointer font-medium text-black hover:scale-105 duration-300 mx-2">
            <a href="/">Home</a>
          </li>
          <li className="cursor-pointer font-medium text-black hover:scale-105 duration-300 mx-2">
            <a href="/About">About</a>
          </li>
          <li className="cursor-pointer font-medium text-black hover:scale-105 duration-300 mx-2">
            <a href="/Services">Services</a>
          </li>
          <li className="cursor-pointer font-medium text-black hover:scale-105 duration-300 mx-2">
            <a href="/Contact">Contact</a>
          </li>
          <li className="cursor-pointer font-medium text-black hover:scale-105 duration-300 mx-2">
            <a href="/Team">Team</a>
          </li>
          <li className="cursor-pointer font-medium text-black hover:scale-105 duration-300 mx-2">
            <a href="/Reviews">Reviews</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
