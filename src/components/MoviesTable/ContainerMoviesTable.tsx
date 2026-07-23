import useMoviesTable from './useMoviesTable';
import ViewMoviesTable from './ViewMoviesTable';
import Pagination from '../Pagination';
import usePagination from '../../hooks/usePagination';
import SortBy from '../SortBy/SortBy';
import ContainerGenresFilter from '../GenreFilter/ContainerGenresFilter';
import SearchInputContainer from '../SearchInput/SearchInputContainer';
import useMoviesFilter from '../MoviesFilterContext/useMoviesFiter';

const ContainerMoviesTable = () => {
  const { currentGenre, setCurrentGenre, sortBy, setSortBy, debouncedValue } =
    useMoviesFilter();
  const { page, nextPage, prevPage, resetPage } = usePagination();

  const handleSortChange = (newValue: string) => {
    setSortBy(newValue);
    resetPage();
  };
  const { data, isLoading, error, isFetching } = useMoviesTable(
    page,
    sortBy,
    currentGenre,
    debouncedValue,
   
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const movies = data?.movies;
  const totalPages = data?.totalPages;

  return (
    <div className="m-auto p-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Movies</h1>
        <div className="flex flex-wrap items-center gap-5">
          <SearchInputContainer />
          <SortBy sortBy={sortBy} onSortChange={handleSortChange} />
          <ContainerGenresFilter
            currentGenre={currentGenre}
            setCurrentGenre={setCurrentGenre}
          />
        </div>
      </div>
      <ViewMoviesTable movies={movies} totalPages={totalPages} />
      <Pagination
        page={page}
        totalPages={totalPages}
        nextPage={nextPage}
        prevPage={prevPage}
        isFetching={isFetching}
      />
    </div>
  );
};

export default ContainerMoviesTable;
