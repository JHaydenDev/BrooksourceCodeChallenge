import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex-shrink-0 py-4">
            <a
              href="https://www.ajc.com/"
              className="text-2xl font-bold text-blue-700"
            >
              <img
                src={
                  "https://www.ajc.com/pf/resources/logos/AJC/logo-full-redesign.svg?d=1486"
                }
                alt={"image 1"}
              />
              <div className="w-full flex justify-center text-bold-text">
                Sports
              </div>
            </a>
          </div>
          <div className="w-full flex justify-center">
            <div className="flex flex-wrap justify-center space-x-4">
              <a
                href="#"
                className="text-gray-900 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Braves
              </a>
              <a
                href="#"
                className="text-gray-900 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                UGA
              </a>
              <a
                href="#"
                className="text-gray-900 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Hawks
              </a>
              <a
                href="#"
                className="text-gray-900 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Georgia Tech
              </a>
              <a
                href="#"
                className="text-gray-900 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Falcons
              </a>
              <a
                href="#"
                className="text-gray-900 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium"
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
