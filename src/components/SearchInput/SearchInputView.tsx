type props = {
  value: string;

  setInputValue: (e: string) => void;
};

const SearchInputView = ({ value, setInputValue }: props) => {
  return (
    <div>
      <label htmlFor="search"></label>
      <input
        className="h-10 w-40 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm pl-2"
        name="search"
        type="text"
        value={value}
        placeholder="Search..."
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
};

export default SearchInputView;
