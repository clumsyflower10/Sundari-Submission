import React from "react";
import { FaInstagram, FaTiktok, FaWhatsapp, FaFacebook } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="max-w-full mx-auto py-6 px-4 gap-8 text-green-900 bg-[rgb(137,141,88)]">
      <div>
        <h1 className="w-full text-3xl font-bold">Open Daily</h1>
        <p className="py-2">Monday - Friday 8am - 5pm</p>
        <p className="mb-2">Saturday - Sunday 9am - 6pm</p>
        <div className="flex justify-start mb-2 md:w-[75%]">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={30} style={{ margin: "0 6px" }} />
          </a>
          <a
            href="https://www.tiktok.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok size={30} style={{ margin: "0 6px" }} />
          </a>
          <a
            href="https://www.whatsapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={30} style={{ margin: "0 6px" }} />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={30} style={{ margin: "0 6px" }} />
          </a>
          <a
            href="mailto:your.email@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLogoGmail size={30} style={{ margin: "0 6px" }} />
          </a>
        </div>
      </div>
      <div className=" flex justify-between">
        <div>
          <p>
            Jalan Lebak Sari No.3, Petitenget, Badung, Bali, 80361, Indonesia
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
