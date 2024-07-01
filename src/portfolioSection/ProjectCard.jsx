import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function ProjectCard({ project }) {
  const [currentImage, setcurrentImage] = useState(project.images[0]);

  const navigate = useNavigate();

  // render project images carousel
  const ProjectsImages = ({ images }) => {
    return (
      <div id="portfolio" className="p-5 bg-white w-full rounded-md">
        <div className="flex flex-col items-center gap-4 max-w-full h-auto object-contain">
          <div>
            <img
              className="max-h-[130px] bg-cover"
              src={currentImage}
              alt="tmdb-project-image"
              width={300}
              height={140}
            />
          </div>
          <div className="flex flex-wrap justify-center gap-4 max-[350px]:gap-1">
            {images.map((image, index) => (
              <img
                onClick={() => setcurrentImage(images[index])}
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

  return (
    <div className="w-4/5 md:w-3/5 lg:w-2/5 max-h-[900px] bg-emerald-600 bg-opacity-30 rounded-md p-5 flex flex-col gap-5  items-center border-4 border-gray-400">
      <div>
        <ProjectsImages images={project.images} />
      </div>

      {generateUsedTechStackList(project.techStack)}

      <h1 className="text-2xl lg:text-3xl text-sky-400 uppercase font-bold text-center">
        {project.name}
      </h1>
      <p className="text-white min-h-24 max-h-32 w-full overflow-y-scroll border-2 border-gray-400 p-4 rounded-md">
        {project.description}
      </p>
      <div className="flex max-[400px]:flex-col justify-center gap-6 max-[400px]:w-full text-center">
        <div
          onClick={() => navigate(project.url)}
          className="border-4 px-4 py-2 rounded-2xl border-gray-400 bg-white font-bold text-emerald-600 hover:bg-gray-400 hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer"
        >
          Project demo
        </div>
        <div className="border-4 px-4 py-2 rounded-2xl border-gray-400 bg-white font-bold text-emerald-600 hover:bg-gray-400 hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer">
          <a href={project.github} target="_blank">
            Check code on Github
          </a>
        </div>
      </div>
    </div>
  );
}
