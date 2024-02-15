import "./AnimeList.scss";
import { Anime } from "../../types/AnimeResponse";
import CardList from "../../components/CardList/CardList";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import FilterBar from "../../components/FilterBar/FilterBar";

type AnimeListProps = {
   genres: string[];
};

const AnimeList = ({ genres }: AnimeListProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [anime, setAnime] = useState<Anime[]>([]);;
  const [filter, setFilter] = useState<string>("All Genres");

  const getAnime = async () => {
    const url = `http://localhost:8080/anime`;
    const res = await fetch(url);
    const animeData = await res.json();
    setAnime(animeData);
  }; 

  useEffect(() => {
    getAnime();
  }, []) 

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const newInput = event.currentTarget.value.replace(" ", "").toLowerCase();
    setSearchTerm(newInput);
  };

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.currentTarget.value);
  }

  const filteredAnimes =  anime.filter(ani => {
    const titleFilter = ani.title.includes(searchTerm);
    const genreFilter = filter === "All Genres" || ani.genres.some(genre => genre.name === filter);
    return titleFilter && genreFilter; 
      }) ;

    return (
        <section className="animeList" key="list-page">
            <FilterBar
            name="filter"
            handleInputFunction={handleInput}
            searchTerm={searchTerm} genres={genres} onChange={handleChange} defaultValue={genres[10]}            />
            <CardList animes={filteredAnimes} />
        </section>
    )
};

export default AnimeList;