import personImg from "../assets/person.jpg";

export default function Developer() {
  return (
    <div
      id="about"
      className="grid grid-cols-1  sm:pt-10 relative cursor-default pt-[110px] px-16 max-[460px]:px-0 w-full"
    >
      {/* links through icons to github, linkedIn */}
      <div className="absolute left-0 top-20 xl:top-1/2 xl:transform xl:-translate-y-1/2 text-white flex sm:flex-col gap-6 ml-5">
        <a
          target="_blank"
          href="https://github.com/KestutisRuockus?tab=repositories"
        >
          <i className="fa-brands fa-github text-3xl cursor-pointer hover:scale-150 duration-300 hover:text-gray-400"></i>
        </a>
        <a href="https://www.linkedin.com/in/kestutis-ruockus/" target="_blank">
          <i className="fa-brands fa-linkedin text-3xl cursor-pointer hover:scale-150 duration-300 hover:text-blue-600"></i>
        </a>
      </div>

      <div className="grid grid-cols-1 justify-center items-center xl:grid-cols-2 mt-14 sm:mt-0 xl:gap-14 gap-12 max-[460px]:gap-20 text-white">
        {/* photo */}
        <div className="text-white col-span-1 justify-self-center relative max-[460px]:mx-4">
          <span className="absolute max-[460px]:left-[-24px] max-[460px]:top-[-36px] left-[-72px] top-[-8px] text-rose-700 text-xl font-bold">
            &lt;img&gt;
          </span>
          <img
            className="text-white border-2 rounded-md"
            src={personImg}
            alt="person"
            width={300}
            height={400}
          />
          <span className="absolute max-[460px]:left-[-24px] max-[460px]:bottom-[-28px] right-[-80px] bottom-[-2px] text-rose-700 text-xl font-bold">
            &lt;/img&gt;
          </span>
        </div>
        <div className="col-span-1 grid-rows-5 max-[460px]:gap-20 gap-6 xl:gap-0 w-4/5 xl:w-full justify-self-start min-[640px]:justify-self-center xl:pr-10">
          {/* Title */}
          <div className="text-3xl font-bold row-span-1 relative mb-8 max-[460px]:mb-20">
            <span className="absolute max-[460px]:left-[-8px] max-[460px]:top-[-28px] left-[-60px] top-2 text-rose-700 text-xl">
              &lt;h1&gt;
            </span>
            Front-end Developer
            <span className="text-rose-700 text-xl ml-4 max-[460px]:absolute max-[460px]:left-[-22px] max-[460px]:top-[68px] left-[-76px] top-16">
              &lt;/h1&gt;
            </span>
          </div>
          {/* Content about me */}
          <div className="text-xl row-span-4 h-full max-[460px]:w-full relative">
            <div className="absolute max-[460px]:left-[-8px] max-[460px]:top-[-28px] left-[-60px] top-0 text-rose-700 text-xl font-bold">
              &lt;p&gt;
            </div>
            As a Front-End Developer, I possess an impressive arsenal of skills
            in HTML, CSS, JavaScript, React, Tailwind, and Bootstrap. I excel in
            designing and maintaining responsive websites that offer a smooth
            user experience. My expertise lies in crafting dynamic, engaging
            interfaces through writing clean and optimized code and solving
            puzzles, which helps fuel my creativity and problem-solving skills.
            Outside of coding, I have a passion for basketball, which makes me a
            team player. I not only foster chemistry within a team but also
            thrive in collaborating with cross-functional teams to create
            outstanding web applications.
            <span className="text-rose-700 text-xl ml-4 font-bold">
              &lt;/p&gt;
            </span>
          </div>
        </div>
      </div>

      {/* Text to scroll down */}
      <div className="absolute right-0 bottom-0 text-gray-500 uppercase [writing-mode:vertical-lr] tracking-widest">
        Scroll down
        <i className="fa-sharp fa-solid fa-arrow-down mt-2"></i>
      </div>
    </div>
  );
}
