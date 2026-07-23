type SortByProps = {
  sortBy: string;
  onSortChange: (value: string) => void;
};

const SortBy = ({ sortBy, onSortChange }: SortByProps) => {
  return (
    <div className="flex items-center gap-2">
      <label htmlFor="sort-by" className="">
        Sort by:
      </label>
      <select
        className="h-10 w-40 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm pl-2"
        id="sort-by"
        name="sort-by"
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
      >
        <option value="original_title.asc">Title</option>
        <option value="release_date.desc">Release Date</option>
        <option value="vote_average.desc">Vote Average</option>
        <option value="vote_count.desc">Vote Count</option>
        <option value="popularity.desc">Popularity</option>
      </select>
    </div>
  );
};

export default SortBy;
