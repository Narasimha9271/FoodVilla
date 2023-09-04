import Logo from "../assets/img/foodvilla.png";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Title = () => (
    <Link to="/">
        <img
            className="h-20 sm:items-center top-0 w-40"
            src={Logo}
            alt="logo"
        />
    </Link>
);

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");

    const onlineStatus = useOnlineStatus();

    const { loggedInUser } = useContext(UserContext);
    //console.log(loggedInUser);

    // Subscribing to the store using a Selector
    const cartItems = useSelector((store) => store.cart.items);
    //console.log(cartItems);

    return (
        <div className="flex items-center justify-between bg-white  h-[80px] sticky top-0 z-[1000] w-full px-3 shadow-[0_15px_40px_-20px_rgba(40,44,63,0.15)]">
            <Title />
            <div className="flex">
                <div className="flex py-10 ">
                    {/* <li className="px-4 pt-3">
                        Online Status: {onlineStatus ? "✅" : "🔴"}
                    </li> */}
                    <button className="px-4 font-poppins font-bold hover:text-red-500 hover:border-b-2 hover:border-red-500 transition-all duration-200">
                        <Link to="/">Home</Link>
                    </button>

                    <button className="px-4 font-poppins font-bold hover:text-red-500 hover:border-b-2 hover:border-red-500 transition-all duration-200">
                        <Link to="/about">About</Link>
                    </button>

                    <button className="px-4 font-poppins font-bold hover:text-red-500 hover:border-b-2 hover:border-red-500 transition-all duration-200 ">
                        <Link to="/contact">Contact</Link>
                    </button>

                    <Link to="/cart">
                        <li className="font-sans block mt-24 lg:inline-block lg:mt-0 lg:ml-2 align-middle text-black hover:text-gray-700 ">
                            <a href="#" role="button" className="relative flex">
                                <svg
                                    className="flex-1 mb-2 mr-2 w-8  h-8 fill-current"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
                                </svg>
                                <span className="absolute right-0 top-0 rounded-full bg-red-500 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
                                    {cartItems.length}
                                </span>
                            </a>
                        </li>
                    </Link>
                </div>

                <button
                    className="m-2 font-semibold my-5 h-8 p-1 mt-12 rounded hover:shadow-md cursor-pointer bg-green-400 w-20"
                    onClick={() => {
                        btnNameReact === "Login"
                            ? setBtnNameReact("Logout")
                            : setBtnNameReact("Login");
                    }}
                >
                    {btnNameReact}
                </button>
                <button className="p-3 text-base font-bold text-black  hover:text-red-500 ">
                    {loggedInUser}{" "}
                </button>
            </div>
        </div>
    );
};

export default Header;
