type GenresProps = {
  genres: { id: number; name: string }[];
  selectedGenre: number | null;
  onGenreChange: (genreId: number | null) => void;
};

const ViewGenreFilter = ({ genres, selectedGenre, onGenreChange }: GenresProps) => {
  return (
    <div className="flex items-center gap-2">
      <h3>Filter by Genre:</h3>
      <select
        className="h-10 w-40 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm pl-2"
        value={selectedGenre ?? ''}
        onChange={(e) => onGenreChange(Number(e.target.value) || null)}
      >
        <option value="">All Genres</option>
        {genres?.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ViewGenreFilter;
