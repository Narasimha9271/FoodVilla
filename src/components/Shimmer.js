import React from "react";

const Simmeruicards = () => {
    return (
        <>
            {/* simmerui cards */}
            <div className="flex flex-wrap mx-4 lg:mx-36 md:mx-2 sm:mx-2 min-w-[250px] mt-12 bg-white animate-pulse">
                {Array(12)
                    .fill("")
                    .map((e, index) => (
                        <div key={index} className="w-1/4 p-4">
                            <div className="bg-gray-300 h-64 rounded-2xl p-4 animate-pulse">
                                <div className="bg-slate-100 h-36 rounded-lg animate-pulse"></div>
                                <div className="bg-slate-100 h-4 mt-4 rounded-lg animate-pulse"></div>
                                <div className="bg-slate-100 h-4 mt-4 rounded-lg animate-pulse"></div>
                            </div>
                        </div>
                    ))}
            </div>
        </>
    );
};

export default Simmeruicards;
