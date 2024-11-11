import { useState, ChangeEvent } from 'react';
import { FaBell } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";

function DashBoardHeader() {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<string[]>([]);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    setQuery(searchValue);

    // Example: Filter results based on search query
    const filteredResults = searchValue
      ? ["Result 1", "Result 2", "Result 3"].filter((item) =>
          item.toLowerCase().includes(searchValue.toLowerCase())
        )
      : [];

    setResults(filteredResults);
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <div>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <div
            className={`flex items-center gap-2 px-2 w-[80%] py-1 rounded-full ${
              isFocused ? "border border-tertiary" : "border border-tertiary"
            }`}
          >
            <IoIosSearch className='text-[#777]' />
            <input
              className={`py-0 w-[100%] px-1 border-none focus:outline-none focus:ring-0 focus:border-transparent`}
              placeholder='Search...'
              type="text"
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={handleSearchChange}
              value={query}
            />
          </div>
          <FaBell className='text-[#777]' />
        </div>
      </div>
      
      {/* Search Results */}
      {query && results.length > 0 && (
        <div className='p-2 mt-2 bg-white border rounded-lg shadow-lg border-tertiary'>
          {results.map((result, index) => (
            <div key={index} className='px-2 py-1 hover:bg-gray-100'>
              {result}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DashBoardHeader;
