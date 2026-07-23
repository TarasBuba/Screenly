import useMoviesFilter from '../MoviesFilterContext/useMoviesFiter';
import SearchInputView from './SearchInputView';

const SearchInputContainer = () => {
  const { inputValue, setInputValue } = useMoviesFilter();

  return <SearchInputView value={inputValue} setInputValue={setInputValue} />;
};

export default SearchInputContainer;
