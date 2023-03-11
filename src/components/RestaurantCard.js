import React from 'react';
import starIcon from '../assets/img/staricon.png';
import { IMG_CDN_URL } from './constants';

const RestaurantCard = ({ name, cuisines, cloudinaryImageId, avgRating, slaString }) => {
  return (
    <>
    <div className=" w-56 p-3 m-4  bg-gray-50 shadow-md hover:shadow-2xl align-bottom ">
      <img className=" w-[100%] object-cover object-center"
        src={ 
          IMG_CDN_URL +
          cloudinaryImageId
        }
        alt="image"
      /> 
      <div className="px-1.5 pb-2.5">
                <h2 className="text-xl font-medium pt-2 pl-1">{name}</h2>
                <h3 className="pl-1 font-normal">{cuisines?.join(", ")}</h3>
                <div className="flex items-center gap-2">
                    <h4 className="flex items-center gap-1"><img src={starIcon} alt="star-icon" className="h-5" /> {avgRating}</h4>
                    <h4 className="text-base font-thin">{slaString} </h4>
                </div>
            </div>
    </div>
    </>
  );
};

export default RestaurantCard;