import "./AnimeList.scss";
import { Anime, Genres } from "../../types/AnimeResponse";
import CardList from "../../components/CardList/CardList";
import { useEffect, useState } from "react";

type AnimeListProps = {
    genres: Genres[];
};

const AnimeList = ({ genres }: AnimeListProps) => {
    const [anime, setAnime] = useState<Anime[]>([]);;

    const getAnime = async () => {
      const url = `http://localhost:8080/anime`;
      const res = await fetch(url);
      const data = await res.json();
      setAnime(data);
    }; 
  
    useEffect(() => {
      getAnime();
    }, []) 
  
    return (
        <section className="animeList" key="list-page">
            <CardList animes={anime} />
        </section>
    )
};

export default AnimeList;