import Logo from "../assets/img/foodvilla.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const Title = () => (
  <a href="/">
    <img className="h-20  top-0 w-30" src={Logo} alt="logo" />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="flex items-center justify-between bg-white shadow-lg h-20 sticky top-0">
      <Title />
      <div className="flex">
        <div className="flex py-10 ">
          <button className="p-3 text-base font-bold text-black  hover:bg-red-300 rounded-full">
            <Link to="/">Home</Link>
          </button>

          <button className="p-3 text-base font-bold text-black  hover:bg-red-300 rounded-full">
            <Link to="/about">About Us</Link>
          </button>

          <button className="p-3 text-base font-bold text-black  hover:bg-red-300 rounded-full">
            <Link to="/contact">Contact</Link>
          </button>

          <button className="p-3 text-base font-bold text-black  hover:bg-red-300 rounded-full">
            <Link to="/instamart">Instamart</Link>
          </button>

          <button className="p-3 text-base font-bold text-black  hover:bg-red-300 rounded-full">
            <Link to= "/cart">Cart</Link>
          </button>
        </div>
        {isLoggedIn ? (
          <button
            onClick={() => setIsLoggedIn(false)}
            className="m-2 font-semibold my-5 h-8 p-1 mt-12 rounded hover:shadow-md cursor-pointer bg-red-400 w-20 "
          >
            Log Out
          </button>
        ) : (
          <button
            onClick={() => setIsLoggedIn(true)}
            className="m-2 font-semibold my-5 h-8 p-1 mt-12 rounded hover:shadow-md cursor-pointer bg-green-400 w-20"
          >
            Log In
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
