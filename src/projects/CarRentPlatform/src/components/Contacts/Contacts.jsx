import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import BiuroCard from "./BiuroCard";
import ContactUsForm from "./ContactUsForm";

export default function Contacts() {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="text-[#21B14C] text-4xl text-start max-[900px]:text-center font-bold pb-4 max-[900px]:pl-0 pl-[10%] mt-8">
        Contacts
      </div>
      <div className="flex max-[900px]:flex-col max-[900px]:items-center max-[900px]:gap-16 gap-2 flex-row p-2">
        <div className="flex flex-wrap justify-center gap-4  w-full">
          <BiuroCard />
          <BiuroCard />
          <BiuroCard />
          <BiuroCard />
          <BiuroCard />
        </div>
        <div className="w-1/3 max-[900px]:w-full">
          <ContactUsForm />
        </div>
      </div>
      <Footer />
    </div>
  );
}
