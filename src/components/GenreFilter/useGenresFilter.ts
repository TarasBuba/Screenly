import { useQuery } from "@tanstack/react-query";


function useGenresFilter() {

    return useQuery( {
        queryKey: ['genres'],
        queryFn: async () => {
            const apiKey = import.meta.env.VITE_TMDB_API_KEY;
            const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`);
            const data = await response.json();
            console.log('TMDB genres response:', data);
            return data.genres;
        }
    })
};

export default useGenresFilter;

