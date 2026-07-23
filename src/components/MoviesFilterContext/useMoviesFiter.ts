import { useContext } from 'react';
import MoviesFilterContext from './MoviesFilterContext';

const useMoviesFilter = () => {
  const context = useContext(MoviesFilterContext);
  if (context === undefined) {
    throw new Error('useMoviesFilter must be used within a MoviesFilterProvider');
  }
  return context;
};

export default useMoviesFilter;
