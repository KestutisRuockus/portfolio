import React from "react";

export default function BrandAdvertisement() {
  return (
    <div className="bg-black w-full py-5">
      <div className="w-4/5 flex md:flex-row flex-col lg:gap-0 md:gap-6 gap-20 justify-center items-center m-auto text-white">
        <div className="md:w-1/2 w-2/3 flex justify-center">
          <img
            className="w-[320px]"
            src="https://cdn.aboutstatic.com/file/images/c070a43ae266483c2898260fb69a59ab.jpg?quality=75&height=1067&width=800"
            alt=""
          />
        </div>
        <div className="md:w-1/2 w-2/3 h-full flex  flex-col gap-6">
          <div className="flex items-end relative">
            <div className="md:w-1/3 w-1/2">
              <img
                className="w-full rounded-3xl"
                src="https://cdn.aboutstatic.com/file/c06ec5484e28f7c83b331f41848474a0.jpg?quality=75&trim=1&height=550&width=550"
                alt="buffalo brand"
              />
            </div>
            <div className="w-fit xl:text-9xl lg:text-8xl sm:text-7xl text-5xl max-[500px]:text-4xl absolute left-8 lg:mb-24 md:mb-12 mb-20 max-[500px]:mb-12 opacity-20">
              BUFFALO
            </div>
          </div>
          <div className="">
            Use all your positivity, optimism, creativity and motivation. We
            believe in that kind of passion.
          </div>
          <div>
            <button className="py-2 px-6 bg-white text-black rounded-lg font-bold hover:bg-gray-400 transition-colors duration-200">
              See Collection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
