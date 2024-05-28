import RestApiLogo from "../assets/rest-api.gif";

export default function Skills() {
  return (
    <div
      className="text-white text-md flex flex-wrap justify-center gap-6 bg-sky-950 bg-opacity-70 w-4/5 mt-14 px-5 py-14 rounded-md
     shadow-xl shadow-cyan-500/50 font-bold relative"
    >
      <div className="absolute left-4 top-4 text-sky-700 text-lg underline underline-offset-1 cursor-default">
        Tech Stack
      </div>
      <div className="flex flex-col justify-center items-center">
        <i className="fa-brands fa-html5 text-6xl text-orange-600"></i>
        <span className="text-xs">HTML</span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <i className="fa-brands fa-css3-alt text-6xl text-blue-600"></i>
        <span className="text-xs">CSS</span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <i className="fa-brands fa-js text-6xl text-yellow-400"></i>
        <span className="text-xs">JS</span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <i className="fa-brands fa-react text-6xl text-blue-400"></i>
        <span className="text-xs">React</span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img src={RestApiLogo} alt="rest-api" className="w-[60px]" />
        <span className="text-xs">Rest-API</span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
          alt="tailwind"
          className="w-[60px] h-[60px]"
        />
        <span className="text-xs">Tailwind</span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <i className="fa-brands fa-bootstrap text-6xl text-purple-600"></i>
        <span className="text-xs">Bootstrap</span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <i className="fa-brands fa-github text-6xl text-black bg-white rounded-full"></i>
        <span className="text-xs">GitHub</span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img
          src="https://www.vectorlogo.zone/logos/nodejs/nodejs-ar21.svg"
          alt="nodeJS"
          className="w-[60px] h-[60px]"
        />
        <span className="text-xs">NodeJS</span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img
          src="https://www.vectorlogo.zone/logos/mysql/mysql-ar21.svg"
          alt="mySQL"
          className="w-[60px] h-[60px]"
        />
        <span className="text-xs">MySQL</span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img
          src="https://www.vectorlogo.zone/logos/firebase/firebase-ar21.svg"
          alt="firebase"
          className="w-[60px] h-[60px]"
        />
        <span className="text-xs">Firebase</span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/8f/Breezeicons-apps-48-android-studio.svg"
          alt="android studio"
          className="w-[60px] h-[60px]"
        />
        <span className="text-xs">Android Studio</span>
      </div>
    </div>
  );
}
