import React, { useEffect, useState } from "react";

type ImageSliderProps = {
  brands: string[];
};

// Brand Images slideShow. after 5 second changes img.
// user can change brand image when click on buttons left angle or right angle
export default function SlidesShow({ brands }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0);

  // automatically change brand image after 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      showNextImage();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // display previous image on clicking left angle icon
  function showPrevImage() {
    setImageIndex((prevImageIndex) => {
      console.log("prevI:" + prevImageIndex);
      console.log("url:" + brands[imageIndex]);
      if (prevImageIndex === 0) return brands.length - 1;
      else {
        return prevImageIndex - 1;
      }
    });
  }

  // display next image on clicking right angle icon
  function showNextImage() {
    setImageIndex((prevImageIndex) => {
      if (prevImageIndex === brands.length - 1) return 0;
      else {
        return prevImageIndex + 1;
      }
    });
  }

  return (
    <div className="w-full h-[200px] bg-[#FECA5A]">
      <div className="w-full h-full m-auto flex gap-4 justify-center items-center py-8 sm:px-0 px-2">
        <i
          onClick={showPrevImage}
          className="fa-solid fa-angle-left text-4xl mx-4 cursor-pointer sm:px-6 px-2 py-4 rounded-full"
        ></i>
        <div className="flex items-center sm:w-48 w-4/5 max-sm:hidden max-[500px]:h-20 h-10 :">
          <img
            className="w-full h-full"
            src={
              imageIndex === 0
                ? brands[brands.length - 1]
                : brands[imageIndex - 1]
            }
          />
        </div>
        <div className="flex items-center sm:w-96 w-full max-[400px]:h-16 h-24 :">
          <img className="w-full h-full" src={brands[imageIndex]} />
        </div>
        <div className="flex items-center sm:w-48 w-4/5 max-sm:hidden max-[500px]:h-20 h-10 :">
          <img
            className="w-full h-full"
            src={
              imageIndex === brands.length - 1
                ? brands[0]
                : brands[imageIndex + 1]
            }
          />
        </div>
        <i
          onClick={showNextImage}
          className="fa-solid fa-angle-right text-4xl mx-4 cursor-pointer sm:px-6 px-2 py-4 rounded-full"
        ></i>
      </div>
    </div>
  );
}
