import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../utils/constants";
function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));
  const pagesCount = Math.ceil(count / PAGE_SIZE);
  function nextPage() {
    const next = currentPage === pagesCount ? pagesCount : currentPage + 1;
    searchParams.set("page", next);
    setSearchParams(searchParams);
  }
  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }
  if (pagesCount < 2) return null;
  return (
    <div className="flex items-center justify-center space-x-4 p-4">
      <button
        className="bg-pink-500 text-white px-4 py-2 rounded shadow hover:bg-pink-400 transition cursor-pointer"
        disabled={currentPage === 1}
        onClick={prevPage}
      >
        Previous
      </button>
      <span className=" text-base font-bold">
        Page{" "}
        <span className="text-pink-500 text-base font-bold">{currentPage}</span>{" "}
        of{" "}
        <span className="text-pink-500 text-base font-bold">{pagesCount}</span>
      </span>
      <button
        className="bg-pink-500 text-white px-4 py-2 rounded shadow hover:bg-pink-400 transition"
        disabled={currentPage === pagesCount}
        onClick={nextPage}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
