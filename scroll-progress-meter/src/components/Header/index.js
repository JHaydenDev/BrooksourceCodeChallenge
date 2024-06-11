import React, { useEffect, useState } from "react";
import "./index.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    let throttleTimeout;

    const handleScroll = () => {
      if (!throttleTimeout) {
        throttleTimeout = setTimeout(() => {
          setIsScrolled(window.scrollY > 50);
          throttleTimeout = null;
        }, 200); // Adjust the throttle time as needed
      }
    };

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header
        className={`bg-white sticky top-0 z-50 ${isScrolled ? "scrolled" : ""}`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="p-2 ml-6 mr-32">
                <svg
                  width="22"
                  height="20"
                  viewBox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 0h22v2.444H0V0zm0 8.556h14.667V11H0V8.556zm0 8.555h22v2.445H0V17.11z"
                    fill="#282828"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex items-center">
                <a href="https://www.ajc.com/">
                  {isSmallScreen ? (
                    <img
                      src={
                        "https://www.ajc.com/pf/resources/logos/AJC/logo-short.svg?d=1486"
                      }
                      alt={"AJC logo"}
                      className="h-10"
                    />
                  ) : (
                    <img
                      src={
                        "https://www.ajc.com/pf/resources/logos/AJC/logo-full-redesign.svg?d=1486"
                      }
                      alt={"AJC logo"}
                      className="h-10"
                    />
                  )}
                </a>
              </div>
            </div>
            <div className="flex items-center justify-end">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold text-xs rounded-full mr-4 h-6 w-24">
                Subscribe
              </button>
              <button className="flex items-center py-2 px-4 rounded-full">
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.552 10.138a9.414 9.414 0 1 1-18.828 0 9.414 9.414 0 0 1 18.828 0z"
                    stroke="#282828"
                    strokeWidth="1.448"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.226 6.935a1.208 1.208 0 1 0 0 2.417 1.208 1.208 0 0 0 0-2.417zM8.213 8.144a2.014 2.014 0 1 1 4.027 0 2.014 2.014 0 0 1-4.027 0zM7.19 11.553c.378-.378.89-.59 1.424-.59h3.223a2.014 2.014 0 0 1 2.013 2.014v.805a.403.403 0 0 1-.805 0v-.805a1.208 1.208 0 0 0-1.208-1.208H8.614a1.208 1.208 0 0 0-1.208 1.208v.805a.403.403 0 1 1-.805 0v-.805c0-.534.212-1.046.59-1.424z"
                    fill="#282828"
                  ></path>
                </svg>
                <div className="pl-2"> Log In</div>
              </button>
            </div>
          </div>
        </div>
        <div
          className={`text-2xl font-bold w-full flex justify-center mb-2 ${
            isScrolled ? "hidden" : "flex"
          }`}
        >
          Sports
        </div>
      </header>
      <div
        id="links-container"
        className={`w-full flex justify-center ${
          isScrolled ? "hidden" : "flex"
        }`}
      >
        <div className="w-full flex flex-wrap justify-center space-x-4 border-solid border-y-2 border-light-grey">
          <a
            href="https://www.ajc.com/sports/atlanta-braves/"
            className="text-gray-900 hover:text-link-blue px-3 py-2 rounded-md text-sm font-medium"
          >
            Braves
          </a>
          <a
            href="https://www.ajc.com/sports/georgia-bulldogs/"
            className="text-gray-900 hover:text-link-blue px-3 py-2 rounded-md text-sm font-medium"
          >
            UGA
          </a>
          <a
            href="https://www.ajc.com/sports/atlanta-hawks/"
            className="text-gray-900 hover:text-link-blue px-3 py-2 rounded-md text-sm font-medium"
          >
            Hawks
          </a>
          <a
            href="https://www.ajc.com/sports/georgia-tech/"
            className="text-gray-900 hover:text-link-blue px-3 py-2 rounded-md text-sm font-medium"
          >
            Georgia Tech
          </a>
          <a
            href="https://www.ajc.com/sports/atlanta-falcons/"
            className="text-gray-900 hover:text-link-blue px-3 py-2 rounded-md text-sm font-medium"
          >
            Falcons
          </a>
          <a
            href="https://www.ajc.com/sports/atlanta-united/"
            className="text-gray-900 hover:text-link-blue px-3 py-2 rounded-md text-sm font-medium"
          >
            United
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
