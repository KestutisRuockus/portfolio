import { useState } from "react";

export default function Pagination() {
  const [page, setPage] = useState(1);
  const totalPages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (
    <>
      <ul className="flex justify-center items-center gap-8">
        <i
          onClick={() => {
            page != totalPages[0] ? setPage(page - 1) : "";
          }}
          className="fa-solid fa-angles-left cursor-pointer hover:text-teal-500 transition-all duration-300"
        ></i>
        {totalPages.map((number) =>
          number < page - 3 || number > page + 3 ? (
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
            page != totalPages[totalPages.length - 1] ? setPage(page + 1) : "";
          }}
          className="fa-solid fa-angles-right cursor-pointer hover:text-teal-500 transition-all duration-300"
        ></i>
      </ul>
    </>
  );
}
