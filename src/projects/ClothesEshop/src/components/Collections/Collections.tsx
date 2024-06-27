import { collectionsTypes } from "../../data/collectionsTypes";
import React from "react";

// render possible collections components
function generateCollection(
  collections: { collection: string; pageUrl: string; imgUrl: string }[]
) {
  return (
    <div className="w-fit m-auto flex flex-wrap justify-center gap-4">
      {collections.map((obj) => (
        <div className="w-80 max-[580px]:w-72 m-auto my-8 rounded-lg relative">
          <div>
            <img
              className="w-full rounded-lg h-[426px]"
              src={obj.imgUrl}
              alt={obj.collection}
            />
          </div>
          <div className="text-white font-semibold text-center w-4/5 absolute m-auto left-0 right-0 bottom-5 rounded-lg py-6 border-4 border-gray-300 bg-black bg-opacity-70 hover:py-12 hover:bottom-16 hover:bg-gray-500 hover:bg-opacity-80 hover:text-[#FECA5A] transition-all duration-300">
            <h1 className="text-2xl cursor-default">{obj.collection}</h1>
            <h1 className="text-2xl cursor-default">Collection</h1>
            <button className="bg-black text-white bg-opacity-70 py-1 px-4 mt-2 rounded-full border-2 border-gray-300 hover:bg-white hover:bg-opacity-80 hover:text-black hover:border-black hover:scale-110 transition-all duration-300 cursor-pointer">
              Shop Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Collections() {
  return generateCollection(collectionsTypes);
}
