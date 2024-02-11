import "./Main.scss";
import { Anime } from "../../types/animeTypes";
import CardList from "../CardList/CardList";

type MainProps = {
    anime: Anime[];
};

const Main = ({ anime }: MainProps) => {
    return (
        <main className="main" key="main-page">
            <CardList animes={anime} />
            <div className="main-container">
                <Main anime={anime} />
            </div>
        </main>
    )
};

export default Main;