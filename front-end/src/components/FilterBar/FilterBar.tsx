import { ChangeEvent, ChangeEventHandler, FormEventHandler } from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./FilterBar.scss";
import Dropdown from "../Dropdown/Dropdown";

type FilterBarProps = {
    name: string;
    handleInputFunction: FormEventHandler<HTMLInputElement>;
    searchTerm: string;
    genres: string[];
    onChange: ChangeEventHandler<HTMLSelectElement>;
    defaultValue: string
}

const FilterBar = ({name, handleInputFunction, searchTerm, genres, onChange, defaultValue}: FilterBarProps) => {
    

    return (
        <nav className={`nav nav__${name}`}>
            <h2 className={`nav__${name}--heading`}>Filters</h2>
            <Dropdown label={"Genres: "} name={"genres"} items={genres} classname={`nav__${name}--dropdown`} onChange={onChange} defaultValue={defaultValue} />
            <SearchBar id={"searchbox"} name={"search"} placeholder={"Search..."} handleInput={handleInputFunction} searchTerm={searchTerm} />
        </nav>
    )
}

export default FilterBar;