import MoviesFilterContext from './MoviesFilterContext';
import { useState } from 'react';
import useSearchInput from '../SearchInput/useSearchInput';

const MoviesFilterProvider = ({ children }) => {
  const { inputValue, setInputValue, debouncedValue } = useSearchInput();
  const [currentGenre, setCurrentGenre] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState<string>('popularity.desc');

  return (
    <>
      <MoviesFilterContext.Provider
        value={{
          setCurrentGenre,
          sortBy,
          setSortBy,
          currentGenre,
          debouncedValue,
          inputValue,
          setInputValue,
        }}
      >
        {children}
      </MoviesFilterContext.Provider>
    </>
  );
};

export default MoviesFilterProvider;
