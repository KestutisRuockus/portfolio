import CarCard from "../Car/CarCard";

export default function Main() {
  return (
    <div className="flex justify-center gap-6 flex-wrap md:p-20 max-[400px]:p-4 p-10">
      <CarCard />
      <CarCard />
      <CarCard />
    </div>
  );
}
