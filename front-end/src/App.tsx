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
import AddAnime from "./containers/AddAnime/AddAnime";

function App() {
  const [anime, setAnime] = useState<Anime[]>([]);;
  const [genres, setGenres] = useState<string[]>([]);


  const getAnime = async () => {
    const url = `http://localhost:8080/anime`;
    const res = await fetch(url);
    const animeData = await res.json();
    setAnime(animeData);
  }; 

  useEffect(() => {
    getAnime();
  }, []) 

  const getGenres = async() => {
    const url = `http://localhost:8080/genres`;
    const res = await fetch(url);
    const genresData = await res.json();
    setGenres(genresData) 
   }

   useEffect(() => {
    getGenres();
  }, []) 

  const onClick = () => {
    alert("Button clicked");
  };


  // FIRST LETTER DOESNT WORK WITH FILTER?


  return (
    <HashRouter>
    <div className="app">
      <header>
        <NavBar name="main" onClick={onClick} />        
        <FrontPage />
      </header>
      <main>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anime" element={<AnimeList genres={genres} />} />
        <Route path="/anime/:id" element={<InfoPage anime={anime}/>} />
        <Route path="/anime/new" element={<AddAnime genres={genres}/>} />
      </Routes>
      </main>
    </div>
    </HashRouter>
  );
}

export default App;
