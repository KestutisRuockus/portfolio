import { collectionsTypes } from "../../data/collectionsTypes";
import React from "react";
import Button from "../../utils/Buttons";

// render possible collections components
function generateCollection(
  collections: { collection: string; pageUrl: string; imgUrl: string }[]
) {
  return (
    <div className="w-fit m-auto flex flex-wrap justify-center gap-4">
      {collections.map((obj) => (
        <div
          key={obj.collection}
          className="w-80 max-[580px]:w-72 m-auto my-8 rounded-lg relative cursor-pointer group"
        >
          <div>
            <img
              className="w-full rounded-lg h-[426px]"
              src={obj.imgUrl}
              alt={obj.collection}
            />
          </div>
          <div className="text-white font-semibold text-center w-4/5 absolute m-auto left-0 right-0 bottom-5 rounded-lg py-6 border-4 border-gray-300 bg-black bg-opacity-70 group-hover:py-12 group-hover:bottom-16 group-hover:bg-gray-500 group-hover:bg-opacity-80 group-hover:text-[#FECA5A] transition-all duration-300 cursor-pointer">
            <h1 className="text-2xl cursor-pointer">{obj.collection}</h1>
            <h1 className="text-2xl cursor-pointer">Collection</h1>
            <Button text="Shop Now" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Collections() {
  return generateCollection(collectionsTypes);
}
