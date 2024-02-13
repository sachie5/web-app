import { useNavigate, useParams } from "react-router-dom";
import { Anime } from "../../types/AnimeResponse";
import "./InfoPage.scss";
import Checkbox from "../../components/Checkbox/Checkbox";
import { ChangeEvent, ChangeEventHandler, useState } from "react";

type InfoPageProps = {
  anime: Anime[],
};

const InfoPage = ({ anime }: InfoPageProps) => {
  const [watchingChecked, setWatchingChecked] = useState<boolean>(false);
  const [wantChecked, setWantChecked] = useState<boolean>(false);
  const [droppedChecked, setDroppedChecked] = useState<boolean>(false);
  const { id } = useParams();

  const animes = anime.find((ani) => ani.id.toString() === id);
  if (animes === undefined)
    return <p>Sorry. This anime can't be found at the moment.</p>;

    const handleWatchingChange = (event: ChangeEvent<HTMLInputElement>) => {
      setWatchingChecked(!watchingChecked)
    }

    const handleWantChange = (event: ChangeEvent<HTMLInputElement>) => {
      setWantChecked(!wantChecked)
    }

    const handleDroppedChange = (event: ChangeEvent<HTMLInputElement>) => {
      setDroppedChecked(!droppedChecked)
    }

  return (
    <section className="information">
      <figure className="information__container">
            <img className="information__container--image" src={animes.image} alt={animes.title} />
      </figure>
      <section className="information__text">
      <h1 className="information__text--title">{animes.title}</h1>
      <h2 className="information__text--author">{animes.author}</h2>
      <h3 className="information__text--year">{animes.year_of_release}</h3>
      <h4 className="information__text--extra">Episodes: {animes.episodes}<br/> Studio: {animes.information.studio}</h4>
      <div className="information__text--selection">
        <Checkbox name="watch" value="watching" label="Currently Watching" onChange={handleWatchingChange} checked={watchingChecked} disabled={false} />
        <Checkbox name="watch" value="want-watch" label="Want to Watch" onChange={handleWantChange} checked={wantChecked} disabled={false}/>
        <Checkbox name="watch" value="dropped" label="Dropped" onChange={handleDroppedChange} checked={droppedChecked} disabled={false}/>
      </div>
      <p className="information__text--description">{animes.information.animeDescription}</p>
      </section>
    </section>
  );
};

export default InfoPage;
