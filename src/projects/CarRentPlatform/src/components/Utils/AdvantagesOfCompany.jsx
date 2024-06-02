export default function AdvantagesOfCompany() {
  return (
    <div className="pb-8">
      <h1 className="md:text-5xl text-4xl max-[500px]:text-2xl text-[#21B14C] text-center my-16 font-bold">
        Advantages of Company
      </h1>
      <div className="flex flex-wrap justify-center items-start gap-8">
        <div className="flex flex-col justify-center items-center  gap-2 w-44 text-center">
          <div>
            <i className="fa-solid fa-car-on text-4xl text-[#21B14C]"></i>
          </div>
          <div>New cars</div>
        </div>
        <div className="flex flex-col justify-center items-center  gap-2 w-44 text-center">
          <div>
            <i className="fa-regular fa-thumbs-up text-4xl text-[#21B14C]"></i>
          </div>
          <div>Excellent quality-price ratio</div>
        </div>
        <div className="flex flex-col justify-center items-center  gap-2 w-44 text-center">
          <div>
            <i className="fa-regular fa-handshake text-4xl text-[#21B14C]"></i>
          </div>
          <div>Pleasant customer service</div>
        </div>
        <div className="flex flex-col justify-center items-center  gap-2 w-44 text-center">
          <div>
            <i className="fa-solid fa-screwdriver-wrench text-4xl text-[#21B14C]"></i>
          </div>
          <div>Roadside assistance 24/7, replacement car</div>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 w-44 text-center">
          <div>
            <i className="fa-solid fa-list-check text-4xl text-[#21B14C]"></i>
          </div>
          <div>CASCO and civil insurances are included</div>
        </div>
      </div>
    </div>
  );
}
