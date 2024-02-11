import { Anime } from "../../types/animeTypes";
import Card from "../Card/Card";
import "./CardList.scss";

type CardListProps = {
    animes: Anime[];
  };
  
  const CardList = ({ animes }: CardListProps) => {
    if (animes.length === 0) {
      return <p className="default">There is no anime to show.</p>;
    } else {
      return (
        <div className="card-container">
          {animes &&
            animes.map((anime) => (
                <Card
                  key={anime.id}
                  id={anime.id}
                  name={anime.name}
                  year={anime.year}
                />
            ))}
        </div>
      );
    }
  };
  
  export default CardList;