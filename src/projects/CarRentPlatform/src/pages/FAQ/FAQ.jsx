import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import QuestionAndAnswer from "./QuestionAndAnswer";

export default function DUK() {
  const faqList = [
    {
      question: "Do the cars have civil and CASCO insurance?",
      answer:
        "Yes, all our cars are insured and have additional roadside assistance insurance",
    },
    {
      question: "What are the possible payment methods for your services?",
      answer: "You can pay by bank transfer, cash or bank card.",
    },
    {
      question: "How to rent a car?",
      answer:
        "You can book a car in the reservation section by writing a request by e-mail. by mail ***.***@***.com or by phone +000000000. If you reserve a car online, we will contact you to confirm your reservation.",
    },
    {
      question: "Can I change my car after booking/cancel the reservation?",
      answer: `Yes. If you want to change the selected car or cancel your reservation, please call +000000000 or go to the "Change reservation" section of the website. Please include your order number and contact phone number.`,
    },
    {
      question:
        "Where can I pick up the car and where should I return the car?",
      answer: `You can pick up and return cars at any rental point:
      at the office - Address. Also in any place (by prior arrangement) in the cities of Addresses. According to the agreement, we also deliver and pick up cars from your specified address in the territory of Address.`,
    },
    {
      question:
        "What should I do if the rental car breaks down or is involved in a traffic accident?",
      answer:
        "All cars are technically sound, but in the event of such an incident, call our general phone +000000000 at any time of the day and we will send you a replacement car and provide the necessary assistance.",
    },
    {
      question: "Can you deliver cars to our address?",
      answer:
        "Yes, upon prior agreement, we will deliver the car to any address in address.",
    },
    {
      question: "When can I contact you?",
      answer:
        "You can call us 24 hours a day at the number +000000000, as well as write inquiries by e-mail. by mail ***.***@***.com",
    },
    {
      question:
        "Is it possible to order additional equipment when reserving a car?",
      answer:
        "Yes, you can order child seats, navigation devices, mobile internet with Wifi function and a roof rack.",
    },
    {
      question: "Where can I find the conditions for renting a car?",
      answer:
        "You can find the car rental conditions by clicking on this link.",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="text-[#21B14C] text-4xl text-start max-[900px]:text-center font-bold pb-4 max-[900px]:pl-0 pl-[10%] mt-8">
        FAQ
      </div>
      <div className="flex flex-col justify-center items-center gap-8 pb-8">
        {faqList.map((item, index) => (
          <QuestionAndAnswer key={index} item={item} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
