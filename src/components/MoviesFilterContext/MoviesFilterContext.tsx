import { createContext } from 'react';

type MoviesFilterContextValue = {
  setCurrentGenre: (id: number | null) => void;
  sortBy: string;
  setSortBy: (value: string) => void;
  currentGenre: number | null;
  debouncedValue: string;
  inputValue: string;
  setInputValue: (value: string) => void;
};

const MoviesFilterContext = createContext<MoviesFilterContextValue | undefined>(
  undefined,
);

export default MoviesFilterContext;
