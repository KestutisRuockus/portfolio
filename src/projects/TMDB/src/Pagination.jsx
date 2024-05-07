import { useState } from "react";

export default function Pagination() {
  const [page, setPage] = useState(1);
  const totalPages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (
    <>
      <ul className="flex justify-center items-center gap-8">
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
      </ul>
    </>
  );
}
