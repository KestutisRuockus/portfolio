import { useContext } from "react";
import { TmdbContext } from "./TmdbContext";

export default function Pagination() {
  const { page, setPage, totalPages } = useContext(TmdbContext);
  console.log();
  const allPages = [];
  for (let i = 1; i <= totalPages; i++) {
    allPages.push(i);
  }

  return (
    <>
      <ul className="flex justify-center items-center gap-8 pb-8">
        <i
          onClick={() => {
            page != allPages[0] ? setPage(page - 1) : "";
          }}
          className="fa-solid fa-angles-left cursor-pointer hover:text-teal-500 transition-all duration-300"
        ></i>
        {allPages.map((number) =>
          number < page - 2 || number > page + 2 ? (
            ""
          ) : (
            <li
              onClick={() => setPage(number)}
              className={`cursor-pointer ${
                number === page
                  ? "text-teal-500 font-bold text-lg cursor-text"
                  : ""
              }`}
              key={`page-${number}`}
            >
              {number}
            </li>
          )
        )}
        <i
          onClick={() => {
            page != allPages[allPages.length - 1] ? setPage(page + 1) : "";
          }}
          className="fa-solid fa-angles-right cursor-pointer hover:text-teal-500 transition-all duration-300"
        ></i>
      </ul>
    </>
  );
}
