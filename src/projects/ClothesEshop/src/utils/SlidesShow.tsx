import React, { useEffect, useState } from "react";

type ImageSliderProps = {
  brands: string[];
};

export default function SlidesShow({ brands }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    setInterval(() => {
      showNextImage();
    }, 3000);
  }, []);

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
    <div className="w-full h-[200px] bg-[#FECA5A]">
      <div className="w-full h-full m-auto flex justify-center items-center py-8 sm:px-0 px-2">
        <i
          onClick={showPrevImage}
          className="fa-solid fa-angle-left text-4xl mx-4 cursor-pointer sm:px-6 px-2 py-4 rounded-full"
        ></i>
        <div className="flex items-center sm:w-96 w-full max-[500px]:h-40 h-8 :">
          <img className="w-full h-fit" src={brands[imageIndex]} />
        </div>
        <i
          onClick={showNextImage}
          className="fa-solid fa-angle-right text-4xl mx-4 cursor-pointer sm:px-6 px-2 py-4 rounded-full"
        ></i>
      </div>
    </div>
  );
}
