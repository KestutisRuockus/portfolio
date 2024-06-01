import Navbar from "../Navbar/Navbar";
import aboutUsImg from "../../../assets/img/aboutUs.jpg";
import Footer from "../Footer/Footer";

export default function aboutus() {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
        <div className="sm:w-1/2 w-full">
          <img
            className="sm:rounded-r-full rounded-lg rounded-tr-lg min-h-[600px]"
            src={aboutUsImg}
            alt=""
          />
        </div>
        <div className="sm:w-1/2 w-full flex flex-col gap-4 p-4">
          <div className="pb-8">
            <h1 className="text-[#21B14C] text-4xl font-bold pb-4">About us</h1>
            <p>
              We have been working since 2000. Since the establishment of the
              company, our main goal has been the quality of service and
              attitude to the client. To achieve the goal, we gathered a team of
              professionals and provided them with conditions for quality work.
            </p>
          </div>
          <div>
            <h2 className="text-[#21B14C] text-xl font-bold pb-4">
              Car rental
            </h2>
            <p>
              Cars are purchased and serviced at the headquarters of official
              representatives. The company does not rent broken down,
              technically defective cars, so we can be happy with our customers
              who keep returning.
            </p>
          </div>
          <div>
            Reserve a car on the website{" "}
            <strong className="text-[#21B14C]">www.*****.com</strong>, you can
            also send requests by e-mail{" "}
            <strong className="text-[#21B14C]">***.***@*****.com</strong> or
            contact <strong className="text-[#21B14C]">+*********</strong>.
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
