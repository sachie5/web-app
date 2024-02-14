import { Link } from "react-router-dom";
import { Anime } from "../../types/AnimeRequest";
import Card from "../Card/Card";
import "./CardList.scss";

type CardListProps = {
    animes: Anime[];
  };
  
  const CardList = ({ animes }: CardListProps) => {
    if (animes.length === 0) {
      return <p className="default">There are no anime to show.</p>;
    } else {
      return (
        <div className="card-container">
          {animes &&
            animes.map((anime) => (
              <Link to={`anime/${anime.id}`} key={anime.id}>
                <Card
                key={anime.id}
                id={anime.id}
                title={anime.title}
                image={anime.image} 
                year_of_release={anime.year_of_release} 
                 />
              </Link>
            ))}
        </div>
      );
    }
  };
  
  export default CardList;