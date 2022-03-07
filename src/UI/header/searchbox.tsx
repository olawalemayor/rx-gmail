import { Component } from "react";
import "./searchbox.css";
import SearchIcon from "@mui/icons-material/Search";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import SearchBar from "./searchBar";

interface SearchBoxProps {}

interface SearchBoxState {}

class SearchBox extends Component<SearchBoxProps, SearchBoxState> {
  //state = { :  }

  render() {
    return (
      <div className="search-box">
        <form>
          <button className="basic-search">
            <SearchIcon />
          </button>

          <SearchBar />

          <button className="advanced-search">
            <ManageSearchIcon />
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBox;