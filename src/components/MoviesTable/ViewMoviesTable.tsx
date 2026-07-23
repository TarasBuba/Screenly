type props = {
  movies: {
    id?: number;
    title: string;
    release_date: string;
    vote_average: number;
    vote_count: number;
    popularity: number;
  }[];
  totalPages: number;
};

const ViewMoviesTable = ({ movies, totalPages }: props) => {
  return (
    <>
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="w-full table-auto">
          <thead className="bg-gray-800 text-white">
            <tr className="uppercase text-xs tracking-wider">
              <th className="px-4 py-2 text-left ">Title</th>
              <th className="px-4 py-2 text-left">Release Date</th>
              <th className="px-4 py-2 text-left">Vote Average</th>
              <th className="px-4 py-2 text-left">Vote Count</th>
              <th className="px-4 py-2 text-left">Popularity</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 ">
            {movies.map((movie) => (
              <tr key={movie.id} className="border-b border-gray-200">
                <td className="px-4 py-2">{movie.title}</td>
                <td className="px-4 py-2">{movie.release_date}</td>
                <td className="px-4 py-2">{movie.vote_average}</td>
                <td className="px-4 py-2">{movie.vote_count}</td>
                <td className="px-4 py-2">{movie.popularity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ViewMoviesTable;
