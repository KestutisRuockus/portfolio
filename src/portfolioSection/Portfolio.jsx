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
// Clothes E-SHOP Project images
import eShop1 from "../projects/ClothesEshop/src/assets/images/e-shop-1.png";
import eShop2 from "../projects/ClothesEshop/src/assets/images/e-shop-2.png";
import eShop3 from "../projects/ClothesEshop/src/assets/images/e-shop-3.png";
import eShop4 from "../projects/ClothesEshop/src/assets/images/e-shop-4.png";
import RestApiLogo from "../assets/rest-api.gif";
import ProjectCard from "./ProjectCard";

// PROEJCTS ARRAY
// 1. CLOTHES E-SHOP PROJECT
// 2. TMDB PROJECT
// 3. CAR RENT PLATFORM PROJECT
// 4. DoctorCare landing page
const projectsDetails = [
  {
    name: "Clothes E-Shop",
    // description:
    //   "Welcome to Clothes E-shop, your one-stop online store for the latest in fashion. Explore a wide range of stylish apparel for men, women, and children. Enjoy a seamless shopping experience with easy navigation, secure payment options, and fast delivery. Stay trendy with Clothes E-shop!",
    description:
      "Explore the latest trends and timeless classics at StyleHub, where fashion meets convenience. Our e-shop offers a diverse range of clothing for men, women, and kids, including everything from chic casual wear to elegant formal attire. With easy navigation, detailed product descriptions, and high-quality images, finding your perfect outfit has never been easier. Enjoy a seamless shopping experience with secure payment options and fast, reliable shipping. Stay stylish, stay confident with StyleHub",
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
];

export default function Portfolio() {
  return (
    <div className="bg-[#444243] w-4/5 mb-20 mt-14 py-14 rounded-md shadow-xl shadow-[#615545] bg-opacity-70 relative">
      <div className="absolute left-4 top-4 text-white text-lg underline underline-offset-1 cursor-default font-bold">
        Projects
      </div>
      <div className="flex flex-wrap gap-8 justify-center">
        {projectsDetails.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}
