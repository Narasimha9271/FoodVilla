import RestaurantCard, { withPromtedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
    // Local State Variable - Super powerful variable
    const [listOfRestaurants, setListOfRestraunt] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");

    const RestaurantCardPromoted = withPromtedLabel(RestaurantCard);

    // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)

    useEffect(() => {
        fetchData();
    }, []);

    const setStateVariable = (jsonData) => {
        jsonData.data.cards.map((item) => {
            if (item.card.card.id === "top_brands_for_you") {
                setListOfRestraunt(
                    item?.card?.card?.gridElements?.infoWithStyle?.restaurants
                );
                setFilteredRestaurant(
                    item?.card?.card?.gridElements?.infoWithStyle?.restaurants
                );
            }
        });
    };

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9716&lng=77.5946&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const jsonData = await data.json();
        setStateVariable(jsonData);
    };

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false)
        return (
            <h1 className="font-bold text-lg">
                Looks like you're offline!! Please check your internet
                connection;
            </h1>
        );

    const { loggedInUser, setUserName } = useContext(UserContext);

    return listOfRestaurants.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="filter flex justify-center">
                <div className="search m-4 p-4">
                    <input
                        type="text"
                        data-testid="searchInput"
                        placeholder="Search a restaurant you want..."
                        className="w-96 p-3 font-poppins  focus:outline-red-400 border-solid border-2 border-gray-200 rounded-l-md"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <button
                        className="font-poppins bg-red-500 text-white hover:bg-black p-3.5 rounded-e-lg"
                        onClick={() => {
                            // Filter the restaurant cards and update the UI
                            // searchText
                            console.log(searchText);

                            const filteredRestaurant = listOfRestaurants.filter(
                                (res) =>
                                    res?.info?.name
                                        .toLowerCase()
                                        .includes(searchText.toLowerCase())
                            );

                            setFilteredRestaurant(filteredRestaurant);
                        }}
                    >
                        Search
                    </button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                    <button
                        className="px-4 py-2 bg-gray-100 rounded-lg"
                        onClick={() => {
                            const filteredList = listOfRestaurants.filter(
                                (res) => res.info.avgRating >= 4
                            );
                            setFilteredRestaurant(filteredList);
                        }}
                    >
                        Top Rated Restaurants
                    </button>
                </div>
                {/* Additional code can go here if needed */}
            </div>

            <div className="flex flex-wrap justify-center">
                {filteredRestaurant.map((restaurant) => (
                    <Link
                        key={restaurant?.info.id}
                        to={"/restaurants/" + restaurant?.info.id}
                    >
                        {restaurant?.info.promoted ? (
                            <RestaurantCardPromoted
                                resData={restaurant?.info}
                            />
                        ) : (
                            <RestaurantCard resData={restaurant?.info} />
                        )}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
