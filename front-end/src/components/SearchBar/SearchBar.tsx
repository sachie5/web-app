import { FormEventHandler } from "react";
import "./SearchBar.scss";

type SearchBarProps = {
    id: string;
    name: string;
    placeholder: string;
    handleInput: FormEventHandler<HTMLInputElement>;
    searchTerm: string;
}

const SearchBar = ({
    id,
    name,
    placeholder,
    handleInput,
    searchTerm,
  }: SearchBarProps) => {
    return(
        <div className="search">
        <input
          className="search__input"
          type="text"
          id={id}
          name={name}
          placeholder={placeholder}
          size={15}
          onInput={handleInput}
          value={searchTerm}
        />
      </div>
    )
}

export default SearchBar;