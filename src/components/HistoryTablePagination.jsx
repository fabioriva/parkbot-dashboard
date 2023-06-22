export default function renderPagination({
  currentPage,
  dataLength,
  defaultPageSize,
  handleChangePage,
}) {
  const totalPages = Math.ceil(dataLength / defaultPageSize);
  const startItem = (currentPage - 1) * defaultPageSize + 1;
  const endItem = Math.min(currentPage * defaultPageSize, dataLength);

  return (
    <div className="flex justify-between items-center mt-3">
      <div className="text-sm">
        Showing {startItem} – {endItem} of {dataLength}
      </div>
      <div className="flex">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l focus:outline-none"
          disabled={currentPage === 1}
          // onClick={() => setCurrentPage(currentPage - 1)}
          onClick={() => handleChangePage(-1)}
        >
          &larr; Prev
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r focus:outline-none"
          disabled={currentPage === totalPages}
          // onClick={() => setCurrentPage(currentPage + 1)}
          onClick={() => handleChangePage(+1)}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
}
