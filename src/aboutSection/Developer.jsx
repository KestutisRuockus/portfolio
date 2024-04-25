import personImg from "../assets/person.svg";

export default function Developer() {
  return (
    <div className="grid grid-cols-1  sm:pt-10 relative cursor-default pt-[110px] px-16 max-[460px]:px-12 w-full">
      {/* links through icons to github, linkedIn */}
      <div className="absolute left-0 top-20 xl:top-1/2 xl:transform xl:-translate-y-1/2 text-white flex sm:flex-col gap-6 ml-5">
        <i className="fa-brands fa-github text-3xl cursor-pointer hover:scale-150 duration-300 hover:text-gray-400"></i>
        <i className="fa-brands fa-linkedin text-3xl cursor-pointer hover:scale-150 duration-300 hover:text-blue-600"></i>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 mt-14 sm:mt-0 gap-12 xl:gap-0 text-white">
        {/* photo */}
        <div className="text-white col-span-1 justify-self-center relative max-[460px]:mx-4">
          <div className="absolute left-[-72px] top-[-8px] text-rose-700 text-xl font-bold">
            &lt;img&gt;
          </div>
          <img
            className="text-white border-2 rounded-md"
            src={personImg}
            alt="person"
            width={300}
            height={400}
          />
          <div className="absolute right-[-82px] bottom-[-2px] text-rose-700 text-xl font-bold">
            &lt;/img&gt;
          </div>
        </div>
        <div className="col-span-1 grid grid-rows-5 gap-6 xl:gap-0 w-4/5 xl:w-full justify-self-start min-[640px]:justify-self-center xl:pr-10">
          {/* Title */}
          <div className="text-3xl font-bold row-span-1 relative">
            <div className="absolute left-[-60px] top-2 text-rose-700 text-xl">
              &lt;h1&gt;
            </div>
            Front-end Developer
            <span className="text-rose-700 text-xl ml-4 max-[399px]:absolute left-[-76px] top-16">
              &lt;/h1&gt;
            </span>
          </div>
          {/* Content about me */}
          <div className="text-xl row-span-4 h-full max-[460px]:w-full relative">
            <div className="absolute left-[-60px] top-0 text-rose-700 text-xl font-bold">
              &lt;p&gt;
            </div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi iure
            in esse magni illo et, autem obcaecati quibusdam explicabo labore
            dolore placeat cumque dicta, ex neque nulla? Ut numquam non
            laboriosam, ab sequi dolore inventore maxime autem, quibusdam
            suscipit exercitationem placeat. Ut pariatur iste dolorem expedita
            qui quae, at laboriosam!
            <span className="text-rose-700 text-xl ml-4 font-bold">
              &lt;/p&gt;
            </span>
          </div>
        </div>
      </div>

      {/* Text to scroll down */}
      <div className="absolute right-0 bottom-0 text-white uppercase [writing-mode:vertical-lr] tracking-widest">
        Scroll down
        <i className="fa-sharp fa-solid fa-arrow-down mt-2"></i>
      </div>
    </div>
  );
}
