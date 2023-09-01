import React from "react";

const Shimmer = () => {
    return (
        <div className="text-black h-[100%] flex flex-col justify-center items-center">
            <span className=" relative  h-[70px] w-[70px] my-5">
                <img
                    className="w-[40px] h-[40px]"
                    src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/icecream_wwomsa"
                    alt="loader"
                />

                <div
                    class="inline-block h-[70px] w-[70px] animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] absolute top-[-15px] left-[-15px]"
                    role="status"
                ></div>
            </span>
            <div className="text-[28px] mt-[37px] mb-0 mx-auto opacity-[.6]">
                Looking for great food near you...
            </div>
        </div>
    );
};

export default Shimmer;
