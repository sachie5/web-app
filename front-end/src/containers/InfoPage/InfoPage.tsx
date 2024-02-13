import { useNavigate, useParams } from "react-router-dom";
import "./InfoPage.scss";
import Checkbox from "../../components/Checkbox/Checkbox";
import { ChangeEvent, ChangeEventHandler, useState } from "react";

type InfoPageProps = {
  anime: AnimeResponse[],
};

const InfoPage = ({ anime }: InfoPageProps) => {
  const [watchingChecked, setWatchingChecked] = useState<boolean>(false);
  const [wantChecked, setWantChecked] = useState<boolean>(false);
  const [droppedChecked, setDroppedChecked] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);
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
    <section className="anime-info">
      <h1 className="anime-info__title">{animes.title}</h1>
      <h2 className="anime-info__author">{animes.author}</h2>
      <h3 className="anime-info__year">{animes.yearOfRelease}</h3>
      <img className="anime-info__image" src={animes.image} alt={animes.title} />
      <h4 className="anime-info__extra">Episodes: {animes.episodes}</h4>
      <div className="anime-info__selection">
        <Checkbox name="watch" value="watching" label="Currently Watching" onChange={handleWatchingChange} checked={watchingChecked} disabled={disabled} />
        <Checkbox name="watch" value="want-watch" label="Want to Watch" onChange={handleWantChange} checked={wantChecked} disabled={false}/>
        <Checkbox name="watch" value="dropped" label="Dropped" onChange={handleDroppedChange} checked={droppedChecked} disabled={false}/>
      </div>
      <p className="anime-info__description"></p>
    </section>
  );
};

export default InfoPage;
