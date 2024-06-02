import Logo from "../Utils/Logo";
import { Link } from "react-router-dom";

export default function Footer() {
  const links = [
    {
      title: "Home",
      url: "/carrentplatform",
    },
    {
      title: "Cars",
      url: "/carrentplatform/allcars",
    },
    {
      title: "FAQ",
      url: "/carrentplatform/faq",
    },
    {
      title: "About Us",
      url: "/carrentplatform/aboutus",
    },
    {
      title: "Contacts",
      url: "/carrentplatform/contacts",
    },
  ];

  return (
    <div className="min-h-[400px] flex flex-col justify-center items-center gap-6 bg-[#0D1017] text-white mt-4 py-8">
      <div className="w-4/5 leading-6 text-sm border-b-[1px] border-[#21B14C] pb-8">
        We have been working since 2000. Since the establishment of the company,
        our main goal has been the quality of service and attitude to the
        client. To achieve the goal, we gathered a team of professionals and
        provided them with conditions for quality work. Cars are purchased and
        serviced at the headquarters of official representatives. The company
        does not rent broken down, technically defective cars, so we can be
        happy with our customers who keep returning.
      </div>
      <div className="flex sm:flex-row flex-col sm:justify-evenly items-start sm:gap-0 gap-10 sm:pl-0 pl-[12%] w-full pt-4">
        <div>
          <Logo />
          <div className="flex justify-center gap-4 mt-4">
            <i className="fa-brands fa-square-facebook text-3xl text-blue-400 cursor-pointer hover:scale-125 transition-all duration-300"></i>
            <i className="fa-brands fa-square-instagram text-3xl bg-gradient-to-b from-[#8134af] from-10% via-[#dd2a7b] via-80% to-[#feda77] to-90% text-transparent bg-clip-text cursor-pointer hover:scale-125 transition-all duration-300"></i>
            <i className="fa-brands fa-square-whatsapp text-3xl text-[#128C7E] cursor-pointer hover:scale-125 transition-all duration-300"></i>
          </div>
        </div>
        <div>
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="text-xl hover:text-[#21B14C] hover:underline font-semibold cursor-pointer transition-all duration-200 text-nowrap list-none"
                key={link.title}
              >
                <Link to={link.url}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-[#21B14C] flex flex-col gap-4">
          <div>CAR RENT PLATFORM</div>
          <div>
            <span>+000000000</span>
            <span>***.***@*****.com</span>
          </div>
          <div>Address, Kaunas, Lithuania</div>
        </div>
      </div>
      <div className=" text-gray-600 text-xs sm:text-sm sm:px-0 px-6">
        2015 - 2024 © UAB „Cheapauto LT“. Visos teisės saugomos. Privatumo
        politika
      </div>
    </div>
  );
}
