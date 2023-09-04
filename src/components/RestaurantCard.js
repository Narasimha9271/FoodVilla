import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
import Icon from "../assets/img/Icon.png";

const RestaurantCard = (props) => {
    const { resData } = props;

    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,

        sla,
    } = resData;

    return (
        <div className="w-60 rounded-lg shadow-xl hover:shadow-2xl p-4 m-5 cursor-pointer transition-transform hover:scale-103">
            <img
                src={CDN_URL + cloudinaryImageId}
                className="w-full rounded-2xl"
            />
            <h3 className="font-semibold text-lg truncate overflow-hidden whitespace-nowrap">
                {name}
            </h3>

            <div className="truncate overflow-hidden whitespace-nowrap text-base text-[#02060c99]">
                {cuisines?.join(", ")}
            </div>
            <div className="flex justify-between text-center items-center mt-3 text-slate-600 mb-3">
                {avgRating >= 4 ? (
                    <div className="bg-green-500 rounded-sm text-justify  text-white flex mt-1 h-6 w-14">
                        {" "}
                        <img className="h-6 w-6 p-1 " src={Icon}></img>
                        {avgRating}
                    </div>
                ) : (
                    <div className="bg-red-500 text-justify rounded-sm text-white flex mt-1 h-6 w-14">
                        {" "}
                        <img className="h-6 w-6 p-1 " src={Icon}></img>
                        {avgRating}{" "}
                    </div>
                )}
                <p className="p-1">{sla?.deliveryTime}min</p>
                <p className="p-1">{costForTwo}</p>
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
