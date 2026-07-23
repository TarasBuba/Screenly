import { useState } from 'react';

const usePagination = () => {
  const [page, setPage] = useState(1);
  const [isFetching, setIsFetching] = useState(false);
  const nextPage = () => setPage((page) => page + 1);
  const prevPage = () => setPage((page) => Math.max(page - 1, 1));
  const resetPage = () => setPage(1);

  return { nextPage, prevPage, page, resetPage, isFetching, setIsFetching };
};

export default usePagination;
