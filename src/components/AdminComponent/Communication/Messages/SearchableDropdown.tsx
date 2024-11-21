import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

interface SearchableDropdownProps {
  label: string; // Label for the dropdown
  placeholder: string; // Placeholder text for the dropdown input
  options: string[]; // List of dropdown options
  onSelect: (selectedOption: string) => void; // Callback to return the selected option
}

const SearchableDropdown: React.FC<SearchableDropdownProps> = ({
  label,
  placeholder,
  options,
  onSelect,
}) => {
  const [searchText, setSearchText] = useState("");
  const [filteredOptions, setFilteredOptions] = useState<string[]>(options);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchText(value);
    setFilteredOptions(
      options.filter((option) =>
        option.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const handleOptionSelect = (option: string) => {
    setSearchText(option);
    setIsDropdownOpen(false);
    onSelect(option); // Pass the selected option to the parent
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className="space-y-2">
      <label className="font-semibold" htmlFor="searchable-dropdown">
        {label}
      </label>
      <div className="relative">
        <div className="relative">
          <input
            id="searchable-dropdown"
            type="text"
            value={searchText}
            onChange={handleSearchChange}
            onFocus={() => setIsDropdownOpen(true)}
            placeholder={placeholder}
            className="w-full px-3 py-2 pr-10 border rounded-md"
          />
          <button
            type="button"
            onClick={toggleDropdown}
            className="absolute inset-y-0 flex items-center text-gray-600 right-2"
          >
            {isDropdownOpen ? (
              <IoIosArrowUp className="text-md" />
            ) : (
              <IoIosArrowDown className="text-md text-thin" />
            )}
          </button>
        </div>
        {isDropdownOpen && (
          <ul className="absolute z-10 w-full overflow-y-auto bg-white border rounded-md shadow-md max-h-40">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option, index) => (
                <li
                  key={index}
                  onClick={() => handleOptionSelect(option)}
                  className="px-3 py-2 cursor-pointer hover:bg-gray-200"
                >
                  {option}
                </li>
              ))
            ) : (
              <li className="px-3 py-2 text-gray-500">No results found</li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchableDropdown;
