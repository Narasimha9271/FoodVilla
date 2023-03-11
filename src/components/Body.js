import React, { useState } from "react";
import RestaurantCard from "./Restaurantcard";
import { restaurantList } from "./constants";

function filterData(searchInput, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.includes(searchInput)
  );
  return filterData;
}

const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantList);
  const [searchInput, setSearchInput] = useState("");

  return (
    <>
      <div className="m-2">
        <input
          className="border h-8 border-black w-30"
          type="text"
          placeholder="search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className=" m-1 h-8 p-1 rounded hover:shadow-md cursor-pointer bg-green-300"
          onClick={() => {
            const data = filterData(searchInput, restaurants);
            setRestaurants(() => {
              return data;
            });
          }}
        >
          search
        </button>
      </div>
      <div className="flex flex-wrap">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
