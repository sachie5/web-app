import { FormEventHandler } from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./FilterBar.scss";
import Dropdown from "../Dropdown/Dropdown";

type FilterBarProps = {
    name: string;
    handleInputFunction: FormEventHandler<HTMLInputElement>;
    searchTerm: string;
}

const FilterBar = ({name, handleInputFunction, searchTerm}: FilterBarProps) => {
    
    const genres = ["Select a genre...", "Shonen", "Slice of Life", "Action", "Adventure", "Thriller", "Supernatural", "Comedy", "Drama", "Sports"];
    return (
        <nav className={`nav nav__${name}`}>
            <h2 className={`nav__${name}--heading`}>Filters</h2>
            <Dropdown label={"Genres: "} name={"genres"} items={genres} />
            <SearchBar id={"searchbox"} name={"search"} placeholder={"Search..."} handleInput={handleInputFunction} searchTerm={searchTerm} />
        </nav>
    )
}

export default FilterBar;