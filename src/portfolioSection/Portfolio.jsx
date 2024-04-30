import { useNavigate } from "react-router-dom";
import img1 from "../projects/TMDB/images/no-image-1.svg";
import img2 from "../projects/TMDB/images/no-image-2.svg";
import img3 from "../projects/TMDB/images/no-image-3.svg";
import img4 from "../projects/TMDB/images/no-image-4.svg";
import { useState } from "react";

const projectsDetails = [
  {
    name: "The Movies Database",
    description:
      "The Movie Database (TMDB) is a community built movie and TV database. Every piece of data has been added by our amazing community dating back to 2008. TMDB's strong international focus and breadth of data is largely unmatched and something we're incredibly proud of. Put simply, we live and breathe community and that's precisely what makes us different.",
    images: [img1, img2, img3, img4],
    navigate: "/tmdb-project",
  },
];

const ProjectsImages = () => {
  const tmdbProjectImages = projectsDetails[0].images;
  const [tmdbCurrentImage, setTmdbCurrentImage] = useState(
    tmdbProjectImages[0]
  );

  return (
    <div className="p-5 bg-white w-full rounded-md">
      <div className="flex flex-col items-center gap-4">
        <div>
          <img
            src={tmdbCurrentImage}
            alt="tmdb-project-image"
            width={150}
            height={150}
          />
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {tmdbProjectImages.map((image, index) => (
            <img
              onClick={() => setTmdbCurrentImage(tmdbProjectImages[index])}
              className="cursor-pointer border-2 p-1 rounded-md hover:scale-110 transition-all duration-300"
              key={index}
              src={image}
              width={55}
              height={40}
              alt="tmdb-project-image"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Project = (project) => {
  const navigate = useNavigate();

  return (
    <div className="w-4/5 md:w-1/2 lg:w-2/5 max-h-[750px] bg-emerald-600 bg-opacity-40 rounded-md p-5 flex flex-col gap-5  items-center border-4 border-gray-400">
      <div>
        <ProjectsImages />
      </div>
      <h1 className="text-2xl lg:text-3xl text-sky-400 uppercase font-bold text-center">
        {project.project.name}
      </h1>
      <p className="text-white h-36 overflow-y-scroll border-2 border-gray-400 p-4 rounded-md">
        {project.project.description}
      </p>
      <div
        // onClick={() => navigate(`${project.project.url}`)}
        onClick={() => navigate("/tmdb-project")}
        className="border-4 px-4 py-2 rounded-2xl border-gray-400 bg-white font-bold text-emerald-600 hover:bg-gray-400 hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer"
      >
        Visit Project
      </div>
    </div>
  );
};

export default function Portfolio() {
  return (
    <div className="bg-sky-950 w-4/5 mb-20 mt-14 py-14 rounded-md shadow-xl shadow-cyan-500/50 bg-opacity-70 relative">
      <div className="absolute left-4 top-4 text-sky-700 text-lg underline underline-offset-1 cursor-default font-bold">
        Projects
      </div>
      <div className="flex flex-wrap justify-center gap-16">
        <Project project={projectsDetails[0]} />
      </div>
    </div>
  );
}
