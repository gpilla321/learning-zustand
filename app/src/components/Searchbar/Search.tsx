import { useState } from "react";
import "./search.scss";
import { useItemsListStore } from "../../zustand/store";

const Searchbar = () => {
  const [inputValue, setInputValue] = useState("");
  const search = useItemsListStore((state) => state.search);

  const handleClick = () => {
    search(inputValue);
  };

  const handleInputChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    setInputValue(newValue);
    if (newValue === "") {
      search(newValue);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      search(inputValue);
    }
  };

  return (
    <div>
      <h1>This is a search list</h1>
      <div className="search__wrapper">
        <input
          onChange={handleInputChanged}
          value={inputValue}
          aria-label="Search input"
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleClick} aria-label="Button to search">
          Search
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
