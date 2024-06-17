import React, { useState } from "react";

type ImageSliderProps = {
  brands: string[];
};

export default function SlidesShow({ brands }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0);

  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return brands.length - 1;
      return index - 1;
    });
  }

  function showNextImage() {
    setImageIndex((index) => {
      if (index === brands.length - 1) return 0;
      return index + 1;
    });
  }

  return (
    <div className="w-full bg-[#FECA5A]">
      <div className="w-full m-auto flex justify-center items-center py-8">
        <i
          onClick={showPrevImage}
          className="fa-solid fa-angle-left text-4xl mx-4 cursor-pointer px-6 py-4 rounded-full"
        ></i>
        <div className="w-96 h-40">
          <img className="w-full h-full" src={brands[imageIndex]} />
        </div>
        <i
          onClick={showNextImage}
          className="fa-solid fa-angle-right text-4xl mx-4 cursor-pointer px-6 py-4 rounded-full"
        ></i>
      </div>
    </div>
  );
}
