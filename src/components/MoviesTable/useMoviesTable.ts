import { useQuery, keepPreviousData } from '@tanstack/react-query';

function useMoviesTable(
  page: number,
  sortBy: string,
  currentGenre: number,
  debouncedValue: string,

) {
  return useQuery({
    queryKey: [
      'movies',
      page,
      sortBy,
      currentGenre,
      debouncedValue,
      
    ],
    queryFn: async () => {
      const apiKey = import.meta.env.VITE_TMDB_API_KEY;
      const genreParam = currentGenre ? `with_genres=${currentGenre}` : '';

      const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${debouncedValue}&page=${page}`;

      const discoverUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${page}&sort_by=${sortBy}&${genreParam}`;

      const url = debouncedValue ? searchUrl : discoverUrl;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      return { movies: data.results, totalPages: data.total_pages, };
    },
    placeholderData: keepPreviousData,
  });
}

export default useMoviesTable;
