import React, { useEffect, useState } from "react";
import "./index.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`bg-white shadow-md sticky top-0 z-50 ${
        isScrolled ? "scrolled" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="flex-shrink-0 py-4">
            <a href="https://www.ajc.com/" className="text-2xl font-bold">
              <img
                src={
                  "https://www.ajc.com/pf/resources/logos/AJC/logo-full-redesign.svg?d=1486"
                }
                alt={"AJC logo"}
              />
              <div className="w-full flex justify-center text-bold-text">
                Sports
              </div>
            </a>
          </div>
          <div
            id="links-container"
            className={`w-full flex justify-center ${
              isScrolled ? "hidden" : "flex"
            }`}
          >
            <div className="w-full flex flex-wrap justify-center space-x-4 border-solid border-y-2 border-light-grey">
              <a
                href="#"
                className="text-gray-900 hover:text-link-blue px-3 py-2 rounded-md text-sm font-medium"
              >
                Braves
              </a>
              <a
                href="#"
                className="text-gray-900 hover:text-link-blue px-3 py-2 rounded-md text-sm font-medium"
              >
                UGA
              </a>
              <a
                href="#"
                className="text-gray-900 hover:text-link-blue px-3 py-2 rounded-md text-sm font-medium"
              >
                Hawks
              </a>
              <a
                href="#"
                className="text-gray-900 hover:text-link-blue px-3 py-2 rounded-md text-sm font-medium"
              >
                Georgia Tech
              </a>
              <a
                href="#"
                className="text-gray-900 hover:text-link-blue px-3 py-2 rounded-md text-sm font-medium"
              >
                Falcons
              </a>
              <a
                href="#"
                className="text-gray-900 hover:text-link-blue px-3 py-2 rounded-md text-sm font-medium"
              >
                United
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
