const Pagination = ({
  page,
  totalPages,
  nextPage,
  prevPage,
  isFetching,
}: {
  page: number;
  totalPages: number;
  nextPage: () => void;
  prevPage: () => void;
  isFetching: boolean;
}) => {
  return (
    <div className="flex items-center justify-center gap-4 mt-4">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        onClick={prevPage}
        disabled={page === 1}
      >
        Previous
      </button>

      <div className={isFetching? '': 'invisible'}>
        <div className="w-5 h-5 border-t-2 border-b-2 border-blue-500 rounded-full animate-spin"></div>
      </div>
      {`Page ${page} of ${totalPages}`}

      <div className="w-5 h-5"></div>

      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        onClick={nextPage}
        disabled={page === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
