import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
import { MdStars } from "react-icons/md";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { loggedInUser } = useContext(UserContext);

    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        deliveryTime,
        lastMileTravelString,
    } = resData;

    return (
        // <div
        //     data-testid="resCard"
        //     className="w-60 rounded p-2 m-5 cursor-pointer shadow-md hover:transform hover:scale-103 bg-slate-400 h-80"
        // >
        //     <img
        //         className="rounded-lg"
        //         alt="res-logo"
        //         src={CDN_URL + cloudinaryImageId}
        //     />
        //     <h3 className="font-bold py-4 text-lg">{name}</h3>
        //     <h4>{cuisines.join(", ")}</h4>
        //     <h4
        //         style={
        //             avgRating < 4
        //                 ? { backgroundColor: "var(--light-red)" }
        //                 : avgRating === "--"
        //                 ? { backgroundColor: "white", color: "black" }
        //                 : { color: "white" }
        //         }
        //     >
        //         <i className="fa-solid fa-star"></i>
        //         {avgRating}
        //     </h4>
        //     {/* <h4>₹{costForTwo / 100} FOR TWO</h4>
        //     <h4>{deliveryTime} minutes</h4>
        //     <h4>User : {loggedInUser} </h4> */}
        // </div>
        <div className="w-60 rounded-lg shadow-md p-4 m-5 cursor-pointer transition-transform hover:scale-103">
            <img
                src={CDN_URL + cloudinaryImageId}
                className="w-full rounded-2xl"
            />
            <h3 className="font-semibold text-lg truncate overflow-hidden whitespace-nowrap">
                {name}
            </h3>
            <div className="flex">
                <MdStars className="align-middle" size={22} color="#0f8a65" />
                <span className="ml-1 text-base">{avgRating}</span>
            </div>
            <div className="truncate overflow-hidden whitespace-nowrap text-base text-[#02060c99]">
                {cuisines?.join(", ")}
            </div>
            <h6>{resData?.info?.costForTwo}</h6>
            <div className="text-base text-[#02060c99]">
                {deliveryTime} {deliveryTime?.toString()?.length <= 3 && "mins"}
            </div>
        </div>
    );
};

// Higher Order Component

// input - RestaurantCard =>> RestaurantCardPromoted

export const withPromtedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
                    Promoted
                </label>
                <RestaurantCard {...props} />
            </div>
        );
    };
};

export default RestaurantCard;
