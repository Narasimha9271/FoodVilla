import Logo from '../assets/img/foodvilla.png';
import React from "react";
const Title = () => (
  <a href="/">
    <img className="h-20 w-30" src={Logo} alt="logo" />
  </a>
);

const Header = () => {
  return (
    <div className="flex justify-between bg-white sticky top-0 shadow-lg">
      <Title />
      <div>
        <ul className="flex justify-end py-8">
          <li className="px-2">Home</li>
          <li className="px-2">About</li>
          <li className="px-2">Contact</li>
          <li className="px-2">Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

