import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import BiuroCard from "./BiuroCard";
import ContactUsForm from "./ContactUsForm";

export default function Contacts() {
  const list = [
    {
      city: "Kaunas",
      address: "street number, City, Country",
      phoneNuNumber: "+000000000",
      email: "---.---@***.com",
      workingHours: {
        businessDays: "08:00h - 20:00h",
        weekenDays: "08:00 - 18:00h",
      },
    },
    {
      city: "Vilnius",
      address: "street number, City, Country",
      phoneNuNumber: "+111111111",
      email: "///.///@***.com",
      workingHours: {
        businessDays: "08:00h - 20:00h",
        weekenDays: "08:00 - 18:00h",
      },
    },
    {
      city: "Klaipėda",
      address: "street number, City, Country",
      phoneNuNumber: "+888888888",
      email: "+++.+++@***.com",
      workingHours: {
        businessDays: "08:00h - 20:00h",
        weekendDays: "08:00 - 18:00h",
      },
    },
  ];

  return (
    <div className="bg-white">
      <Navbar />
      <div className="text-[#21B14C] text-4xl text-start max-[900px]:text-center font-bold pb-4 max-[900px]:pl-0 pl-[10%] mt-8">
        Contacts
      </div>
      <div className="flex max-[900px]:flex-col max-[900px]:items-center max-[900px]:gap-16 gap-2 flex-row p-2">
        <div className="flex flex-wrap justify-center gap-4  w-full">
          {list.map((biuro) => (
            <BiuroCard key={biuro.city} biuro={biuro} />
          ))}
        </div>
        <div className="w-1/3 max-[900px]:w-full">
          <ContactUsForm />
        </div>
      </div>
      <Footer />
    </div>
  );
}
