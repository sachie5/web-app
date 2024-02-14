import "./AnimeList.scss";
import { Anime } from "../../types/AnimeResponse";
import CardList from "../../components/CardList/CardList";

type AnimeListProps = {
    anime: Anime[];
};

const AnimeList = ({ anime }: AnimeListProps) => {
    return (
        <section className="animeList" key="list-page">
            <CardList animes={anime} />
        </section>
    )
};

export default AnimeList;