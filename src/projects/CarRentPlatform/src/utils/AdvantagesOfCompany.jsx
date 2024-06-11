export default function AdvantagesOfCompany() {
  const advantages = [
    {
      advantage: "New cars",
      icon: "car-on",
    },
    {
      advantage: "Excellent quality-price ratio",
      icon: "thumbs-up",
    },
    {
      advantage: "Pleasant customer service",
      icon: "handshake",
    },
    {
      advantage: "Roadside assistance 24/7, replacement car",
      icon: "screwdriver-wrench",
    },
    {
      advantage: "CASCO and civil insurances are included",
      icon: "list-check",
    },
  ];

  return (
    <div className="pb-8">
      <h1 className="md:text-5xl text-4xl max-[500px]:text-2xl text-[#21B14C] text-center my-16 font-bold">
        Advantages of Company
      </h1>
      <div className="flex flex-wrap justify-center items-start gap-8">
        {advantages.map((advantage) => (
          <div
            key={advantage.icon}
            className="flex flex-col justify-center items-center  gap-2 w-44 text-center"
          >
            <div>
              <i
                className={`fa-solid fa-${advantage.icon} text-4xl text-[#21B14C]`}
              ></i>
            </div>
            <div>{advantage.advantage}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
