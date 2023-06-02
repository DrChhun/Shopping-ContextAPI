import { useContext } from "react";
import { AppContext } from "@/pages";
export const Paginate = () => {
  const { currentPage, totalPage, setCurrentPage, firstPage } =
    useContext(AppContext);
  return (
    <div className="container">
      <div className="flex gap-4 items-center justify-center">
        <button
          disabled={currentPage === firstPage}
          onClick={() => setCurrentPage(currentPage - 1)}
          className="px-4 py-2 bg-gray-100 border-2 border-gray-200 rounded-full"
        >
          Prev Page
        </button>
        <span>
          {currentPage} / {totalPage}
        </span>
        <button
          disabled={currentPage === totalPage}
          onClick={() => setCurrentPage(currentPage + 1)}
          className="px-4 py-2 bg-gray-100 border-2 border-gray-200 rounded-full"
        >
          Next Page
        </button>
      </div>
    </div>
  );
};
