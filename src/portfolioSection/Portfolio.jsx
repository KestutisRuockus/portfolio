import { useNavigate } from "react-router-dom";
import { useState } from "react";
// TMDB Project images
import img1 from "../projects/TMDB/assets/TMDB-1.png";
import img2 from "../projects/TMDB/assets/TMDB-2.png";
import img3 from "../projects/TMDB/assets/TMDB-3.png";
import img4 from "../projects/TMDB/assets/TMDB-4.png";
// DoctorCare Project images
import imgDoctorCare1 from "../projects/DoctorCare/assets/img/doctorCare-1.png";
import imgDoctorCare2 from "../projects/DoctorCare/assets/img/doctorCare-2.png";
import imgDoctorCare3 from "../projects/DoctorCare/assets/img/doctorCare-3.png";
import imgDoctorCare4 from "../projects/DoctorCare/assets/img/doctorCare-4.png";
// Car Rent Platform Project images
import carRentPlatform1 from "../projects/CarRentPlatform/src/assets/img/rentCarPlatform-1.png";
import carRentPlatform2 from "../projects/CarRentPlatform/src/assets/img/rentCarPlatform-2.png";
import carRentPlatform3 from "../projects/CarRentPlatform/src/assets/img/rentCarPlatform-3.png";
import carRentPlatform4 from "../projects/CarRentPlatform/src/assets/img/rentCarPlatform-4.png";
// Car Rent Platform Project images
import eShop1 from "../projects/ClothesEshop/src/assets/images/e-shop-1.png";
import eShop2 from "../projects/ClothesEshop/src/assets/images/e-shop-1.png";
import eShop3 from "../projects/ClothesEshop/src/assets/images/e-shop-1.png";
import eShop4 from "../projects/ClothesEshop/src/assets/images/e-shop-1.png";
import RestApiLogo from "../assets/rest-api.gif";

// PROEJCTS ARRAY
// 1. DoctorCare landing page
// 2. TMDB PROJECT
// 3. CAR RENT PLATFORM PROJECT
// 4. CLOTHES E-SHOP PROJECT
const projectsDetails = [
  {
    name: "DoctorCare landing page",
    description: "Landing page DoctorCare",
    images: [imgDoctorCare1, imgDoctorCare2, imgDoctorCare3, imgDoctorCare4],
    url: "/doctorcare",
    github:
      "https://github.com/KestutisRuockus/portfolio/tree/main/src/projects/DoctorCare",
    techStack: [
      { name: "HTML", icon: "fa-html5", color: "orange-600" },
      { name: "CSS", icon: "fa-css3-alt", color: "blue-600" },
    ],
  },
  {
    name: "The Movies Database",
    description:
      "The Movie Database (TMDB) is a community built movie and TV database. Every piece of data has been added by our amazing community dating back to 2008. TMDB's strong international focus and breadth of data is largely unmatched and something we're incredibly proud of. Put simply, we live and breathe community and that's precisely what makes us different.",
    images: [img1, img2, img3, img4],
    url: "/tmdb-project",
    github:
      "https://github.com/KestutisRuockus/portfolio/tree/main/src/projects/TMDB",
    techStack: [
      { name: "React", icon: "fa-react", color: "blue-400" },
      {
        name: "Tailwind",
        icon: "",
        color: "",
        imgUrl:
          "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      },
      { name: "Rest-API", icon: "", color: "", imgUrl: RestApiLogo },
    ],
  },
  {
    name: "Car Rent Platform",
    description:
      "Car rent platform - Main car rental points: City, City and City. We also deliver cars to any place in this country",
    images: [
      carRentPlatform1,
      carRentPlatform2,
      carRentPlatform3,
      carRentPlatform4,
    ],
    url: "/carrentplatform",
    github:
      "https://github.com/KestutisRuockus/portfolio/tree/main/src/projects/CarRentPlatform",
    techStack: [
      { name: "React", icon: "fa-react", color: "blue-400" },
      {
        name: "Tailwind",
        icon: "",
        color: "",
        imgUrl:
          "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      },
    ],
  },
  {
    name: "Clothes E-Shop",
    // description:
    //   "Welcome to Clothes E-shop, your one-stop online store for the latest in fashion. Explore a wide range of stylish apparel for men, women, and children. Enjoy a seamless shopping experience with easy navigation, secure payment options, and fast delivery. Stay trendy with Clothes E-shop!",
    description: "In development process...",
    images: [eShop1, eShop2, eShop3, eShop4],
    url: "/clotheseshop",
    github:
      "https://github.com/KestutisRuockus/portfolio/tree/main/src/projects/ClothesEshop",
    techStack: [
      { name: "JS", icon: "fa-js", color: "yellow-400" },
      { name: "React", icon: "fa-react", color: "blue-400" },
      {
        name: "Typescript",
        icon: "",
        color: "",
        imgUrl:
          "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg",
      },
      { name: "CSS", icon: "fa-css3-alt", color: "blue-600" },
      {
        name: "Tailwind",
        icon: "",
        color: "",
        imgUrl:
          "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      },
    ],
  },
];

const ProjectsImages = ({
  projectImages,
  currentProjectImages,
  setCurrentProjectImages,
}) => {
  return (
    <div id="portfolio" className="p-5 bg-white w-full rounded-md">
      <div className="flex flex-col items-center gap-4 max-w-full h-auto object-contain">
        <div>
          <img
            className="max-h-[130px] bg-cover"
            src={currentProjectImages}
            alt="tmdb-project-image"
            width={300}
            height={140}
          />
        </div>
        <div className="flex flex-wrap justify-center gap-4 max-[350px]:gap-1">
          {projectImages.map((image, index) => (
            <img
              onClick={() => setCurrentProjectImages(projectImages[index])}
              className="cursor-pointer border-2 p-1 rounded-md hover:scale-110 transition-all duration-300 bg-cover max-[350px]:w-[55px]"
              key={index}
              src={image}
              width={60}
              height={60}
              alt="tmdb-project-image"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// render icon or image of what technologies was used in project
function generateUsedTechStackList(arr) {
  return (
    <div>
      <h1 className="text-sky-400 text-center font-semibold mb-2">
        Tech Stack:
      </h1>
      <div className="flex flex-wrap justify-center gap-2 w-full ">
        {arr.map((item) => (
          <div
            key={item.name}
            className="bg-black/[.3] py-2 rounded-md flex flex-col justify-center items-center w-16"
          >
            {item.icon !== "" ? (
              <i
                className={`fa-brands ${item.icon} text-3xl text-${item.color}`}
              ></i>
            ) : (
              <img
                src={item.imgUrl}
                alt={item.name}
                className="w-[28px] h-[27px] mb-[2px]"
              />
            )}

            <span className="text-xs text-white">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const Project = (props) => {
  const navigate = useNavigate();
  return (
    <div className="w-4/5 md:w-3/5 lg:w-2/5 max-h-[900px] bg-emerald-600 bg-opacity-30 rounded-md p-5 flex flex-col gap-5  items-center border-4 border-gray-400">
      <div>
        <ProjectsImages
          projectImages={props.projectImages}
          currentProjectImages={props.currentProjectImages}
          setCurrentProjectImages={props.setCurrentProjectImages}
        />
      </div>

      {generateUsedTechStackList(props.project.techStack)}

      <h1 className="text-2xl lg:text-3xl text-sky-400 uppercase font-bold text-center">
        {props.project.name}
      </h1>
      <p className="text-white min-h-24 max-h-32 w-full overflow-y-scroll border-2 border-gray-400 p-4 rounded-md">
        {props.project.description}
      </p>
      <div className="flex max-[400px]:flex-col justify-center gap-6 max-[400px]:w-full text-center">
        <div
          onClick={() => navigate(props.project.url)}
          className="border-4 px-4 py-2 rounded-2xl border-gray-400 bg-white font-bold text-emerald-600 hover:bg-gray-400 hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer"
        >
          Project demo
        </div>
        <div className="border-4 px-4 py-2 rounded-2xl border-gray-400 bg-white font-bold text-emerald-600 hover:bg-gray-400 hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer">
          <a href={props.project.github} target="_blank">
            Project Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default function Portfolio() {
  {
    /* IMAGES FOR DoctorCare Landing Page */
  }
  const doctorCareProjectImages = projectsDetails[0].images;
  const [doctorCareCurrentImage, setDoctorCareCurrentImage] = useState(
    doctorCareProjectImages[0]
  );
  {
    /* IMAGES FOR TMDB PROJECT */
  }
  const tmdbProjectImages = projectsDetails[1].images;
  const [tmdbCurrentImage, setTmdbCurrentImage] = useState(
    tmdbProjectImages[0]
  );
  {
    /* IMAGES FOR CAR RENT PLATFORM PROJECT */
  }
  const CarRentPlatformProjectImages = projectsDetails[2].images;
  const [CarRentPlatformCurrentImage, setCarRentPlatformCurrentImage] =
    useState(CarRentPlatformProjectImages[0]);
  {
    /* IMAGES FOR CLOTHES E-SHOP PROJECT */
  }
  const ClothesEshopProjectImages = projectsDetails[3].images;
  const [ClothesEshopCurrentImage, setClothesEshopCurrentImage] = useState(
    ClothesEshopProjectImages[0]
  );

  return (
    <div className="bg-sky-950 w-4/5 mb-20 mt-14 py-14 rounded-md shadow-xl shadow-cyan-500/50 bg-opacity-70 relative">
      <div className="absolute left-4 top-4 text-sky-700 text-lg underline underline-offset-1 cursor-default font-bold">
        Projects
      </div>
      <div className="flex flex-wrap justify-center gap-16">
        {/* DoctorCare Landing Page */}
        <Project
          project={projectsDetails[0]}
          projectImages={doctorCareProjectImages}
          currentProjectImages={doctorCareCurrentImage}
          setCurrentProjectImages={setDoctorCareCurrentImage}
        />
        {/* TMDB PROJECT */}
        <Project
          project={projectsDetails[1]}
          projectImages={tmdbProjectImages}
          currentProjectImages={tmdbCurrentImage}
          setCurrentProjectImages={setTmdbCurrentImage}
        />
        {/* CAR RENT PLATFORM PROJECT */}
        <Project
          project={projectsDetails[2]}
          projectImages={CarRentPlatformProjectImages}
          currentProjectImages={CarRentPlatformCurrentImage}
          setCurrentProjectImages={setCarRentPlatformCurrentImage}
        />
        {/* CLOTHES E-SHOP PROJECT */}
        <Project
          project={projectsDetails[3]}
          projectImages={ClothesEshopProjectImages}
          currentProjectImages={ClothesEshopCurrentImage}
          setCurrentProjectImages={setClothesEshopCurrentImage}
        />
      </div>
    </div>
  );
}
