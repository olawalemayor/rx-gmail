import { Component } from "react";
import "./searchbox.css";
import SearchBar from "./searchBar";
import SearchButton from "./search/searchButton";
import SearchOptions from "./search/searchOptions";

interface SearchBoxProps {}

interface SearchBoxState {}

class SearchBox extends Component<SearchBoxProps, SearchBoxState> {
  //state = { :  }

  render() {
    return (
      <div className="search-box">
        <form>
          <SearchButton />

          <SearchBar />

          <SearchOptions />
        </form>
      </div>
    );
  }
}

export default SearchBox;
