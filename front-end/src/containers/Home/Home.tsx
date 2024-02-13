import "./Home.scss";
import { Anime } from "../../types/AnimeRequest";
import CardList from "../../components/CardList/CardList";

type MainProps = {
    anime: Anime[];
};

const Main = ({ anime }: MainProps) => {
    return (
        <section className="main" key="main-page">
            <CardList animes={anime} />
        </section>
    )
};

export default Main;