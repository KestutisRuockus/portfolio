import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import QuestionAndAnswer from "./QuestionAndAnswer";

export default function DUK() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="text-[#21B14C] text-4xl text-start max-[900px]:text-center font-bold pb-4 max-[900px]:pl-0 pl-[10%] mt-8">
        FAQ
      </div>
      <div className="flex flex-col justify-center items-center gap-6">
        <QuestionAndAnswer />
        <QuestionAndAnswer />
      </div>
      <Footer />
    </div>
  );
}
