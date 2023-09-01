import Logo from "../assets/img/foodvilla.png";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Title = () => (
    <a href="/">
        <img className="h-20  top-0 w-30" src={Logo} alt="logo" />
    </a>
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
                    <button className="p-3 text-base font-bold text-black  hover:bg-red-300 rounded-sm">
                        <Link to="/">Home</Link>
                    </button>

                    <button className="p-3 text-base font-bold text-black  hover:bg-red-300 rounded-full">
                        <Link to="/about">About Us</Link>
                    </button>

                    <button className="p-3 text-base font-bold text-black  hover:bg-red-300 rounded-full">
                        <Link to="/contact">Contact</Link>
                    </button>

                    <button className="p-3 text-base font-bold text-black  hover:bg-red-300 rounded-full">
                        <Link to="/grocery">Grocery</Link>
                    </button>

                    <button className="p-3 text-base font-bold text-black  hover:bg-red-300 rounded-full">
                        <Link to="/cart">
                            Cart - ({cartItems.length} items)
                        </Link>{" "}
                    </button>
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
                <button className="p-3 text-base font-bold text-black  hover:bg-red-300 ">
                    {loggedInUser}{" "}
                </button>
            </div>
        </div>
    );
};

export default Header;
