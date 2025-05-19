import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaBehance } from "react-icons/fa";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">

        {/* Social Media Icons - Responsive */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            { icon: <FaFacebook />, link: "https://www.facebook.com/share/18XvkG89PA/" },
            { icon: <FaTwitter />, link: "https://x.com/HozefaSale8667?t=gPaY4Ht1EpssZ8yto9ibhg&s=09" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/mohammad-hozefa-saleem-62877021b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/hozefasaleem01?igsh=MWltYjIzZmoyMTA2bQ==" },
            { icon: <FaBehance />, link: "https://www.behance.net/mohammasaleem2" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-400 mt-6">
          © 2025 Hozefa Saleem. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
