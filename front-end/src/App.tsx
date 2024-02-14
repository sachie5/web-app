import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import FrontPage from "./components/FrontPage/FrontPage";
import FilterBar from "./components/FilterBar/FilterBar";
import { Anime, Genres } from "./types/AnimeResponse";
import InfoPage from "./containers/InfoPage/InfoPage";
import "./App.scss";
import { HashRouter, Route, Routes } from "react-router-dom";
import AnimeList from "./containers/AnimeList/AnimeList";
import Home from "./containers/Home/Home";

function App() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [anime, setAnime] = useState<Anime[]>([]);;
  const [genres, setGenres] = useState<string[]>([]);

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
        <FrontPage />
        <FilterBar
          name="filter"
          handleInputFunction={handleInput}
          searchTerm={searchTerm}
        />
      </header>
      <main>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anime" element={<AnimeList genres={genres} />} />
        <Route path="/anime/:id" element={<InfoPage anime={anime}/>} />
      </Routes>
      </main>
    </div>
    </HashRouter>
  );
}

export default App;
