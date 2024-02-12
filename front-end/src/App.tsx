import { FormEvent, useEffect, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import FrontPage from "./components/FrontPage/FrontPage";
import FilterBar from "./components/FilterBar/FilterBar";
import { Anime } from "./types/animeTypes";
import Main from "./containers/Main/Main";
import InfoPage from "./containers/InfoPage/InfoPage";
import "./App.scss";
import { HashRouter, Route, Routes } from "react-router-dom";

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

  const onClick = () => {
    alert("Button clicked");
  };

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const newInput = event.currentTarget.value.replace(" ", "").toLowerCase();
    setSearchTerm(newInput);
  };

  const filteredAnimes =  anime.filter(ani => ani.title.includes(searchTerm));

  return (
    <HashRouter>
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
        <Routes>
        <Route path="/" element={<Main anime={filteredAnimes} />} />
        <Route path="/anime/:id" element={<InfoPage anime={anime} />} />
      </Routes>
      </main>
    </div>
    </HashRouter>
  );
}

export default App;
