import { ChangeEvent, FormEvent, FC } from "react";
import { useState } from "react";
import "./SearchBar.css";

interface StateType {
  term: string;
  location: string;
  sortBy: string;
}

interface SortByType {
  [index: string]: string;
}

type FunctionType = (term: string, location: string, sortBy: string) => void;

const SearchBar = ({ searchYelp }: { searchYelp: FunctionType }) => {
  const [state, setState] = useState<StateType>({
    term: "",
    location: "",
    sortBy: "best_match",
  });

  const sortByOptions: SortByType = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Relevant": "review_count",
  };

  function getSortByClass(sortByOption: string): string {
    if (state.sortBy === sortByOption) {
      return "active";
    } else {
      return "";
    }
  }

  function handleSortByChange(sortByOption: string) {
    setState({ ...state, sortBy: sortByOption });
  }

  function handleTermChange(event: ChangeEvent<HTMLInputElement>) {
    setState({ ...state, term: event.target.value });
  }

  function handleLocationChange(event: ChangeEvent<HTMLInputElement>) {
    setState({ ...state, location: event.target.value });
  }

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    const { term, location, sortBy } = state;
    searchYelp(term, location, sortBy);
    event.preventDefault();
  }

  function renderSortByOptions() {
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return (
        <li
          onClick={() => handleSortByChange(sortByOptionValue)}
          className={getSortByClass(sortByOptionValue)}
          key={sortByOptionValue}
        >
          {sortByOption}
        </li>
      );
    });
  }

  return (
    <div className="SearchBar">
      <div className="SearchBar-sort-options">
        <ul>{renderSortByOptions()}</ul>
      </div>
      <form onSubmit={(e) => handleSearch(e)}>
        <div className="SearchBar-fields">
          <input
            onChange={(e) => handleTermChange(e)}
            placeholder="Search Businesses"
          />
          <input
            onChange={(e) => handleLocationChange(e)}
            placeholder="Where?"
          />
        </div>
        <div className="SearchBar-submit">
          <button type="submit">Let's Go</button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
