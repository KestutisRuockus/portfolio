import logo from "../assets/img/logo.png";

export default function Logo() {
  return (
    <div className="bg-transparent p-2">
      <img
        className="rounded-full w-24"
        src={logo}
        alt="car rental platform logo"
      />
    </div>
  );
}
