import Logo from "../assets/img/foodvilla.png";
import React, { useState } from "react";

const Title = () => (
  <a href="/">
    <img className="h-20  top-0 w-30" src={Logo} alt="logo" />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="flex justify-between bg-white sticky top-0 shadow-lg h-[80]">
      <Title />
      <div className="flex">
        <ul className="flex justify-end py-6">
          <li className="px-2">Home</li>
          <li className="px-2">About</li>
          <li className="px-2">Contact</li>
          <li className="px-2">Cart</li>
        </ul>
        {isLoggedIn ? (
          <button
            onClick={() => setIsLoggedIn(false)}
            className="m-2 font-semibold my-5 h-8 p-1 rounded hover:shadow-md cursor-pointer bg-red-400 w-20 "
          >
            Log Out
          </button>
        ) : (
          <button
            onClick={() => setIsLoggedIn(true)}
            className="m-2 font-semibold my-5 h-8 p-1 rounded hover:shadow-md cursor-pointer bg-green-400 w-20"
          >
            Log In
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
