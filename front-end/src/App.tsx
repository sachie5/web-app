import { FormEvent, MouseEvent, MouseEventHandler, useEffect, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import FrontPage from "./components/FrontPage/FrontPage";
import FilterBar from "./components/FilterBar/FilterBar";
import { Anime } from "./types/animeTypes";
import Main from "./components/Main/Main";

function App() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [anime, setAnime] = useState<Anime[]>([]);

  const getAnime = async () => {
    const url = `http://localhost:8080/anime`;
    const res = await fetch(url);
    const data = await res.json();
    setAnime(data);
  };

  useEffect(() => {
    getAnime();
  }, [])

  const onClick = (event: MouseEvent) => {
    alert("Button clicked");
  };

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const newInput = event.currentTarget.value.replace(" ", "").toLowerCase();
    setSearchTerm(newInput);
  };

  return (
    <div className="app">
      <header>
        <NavBar name="main" onClick={onClick} />
      </header>
      <main>
        <FrontPage />
        <FilterBar
          name="filter"
          handleInputFunction={handleInput}
          searchTerm={searchTerm}
        />
        <Main anime={anime} />
      </main>
    </div>
  );
}

export default App;
