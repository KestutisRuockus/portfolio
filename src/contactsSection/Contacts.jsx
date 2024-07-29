const contacts = [
  { item: "Email", value: "kestutisruockus@gmail.com", link: false },
  { item: "GitHub", value: "https://github.com/KestutisRuockus", link: true },
  {
    item: "LinkedIn",
    value: "https://www.linkedin.com/in/kestutis-ruockus/",
    link: true,
  },
];

export default function Contacts() {
  return (
    <div
      id="contacts"
      className="text-white text-md flex flex-col gap-6 bg-[#444243] bg-opacity-70 w-4/5 mt-14 px-5 py-14 rounded-md
     shadow-xl shadow-[#615545] font-bold relative"
    >
      <div className="absolute left-4 top-4 text-white text-lg underline underline-offset-1 cursor-default">
        Contacts
      </div>
      {contacts.map((item) => (
        <div key={item.item} className="flex flex-col gap-2 w-full">
          <h3 className="text-slate-400 w-full">{item.item}:</h3>
          <a
            href={item.link ? `${item.value}` : ""}
            target="_blank"
            className={`break-text w-full pointer-events-${
              item.link ? "auto" : "none"
            }`}
          >
            {item.value}
          </a>
        </div>
      ))}
    </div>
  );
}
