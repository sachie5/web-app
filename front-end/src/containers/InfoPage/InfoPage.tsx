import { Form, Link, useParams } from "react-router-dom";
import { Anime } from "../../types/AnimeResponse";
import "./InfoPage.scss";
import Checkbox from "../../components/Checkbox/Checkbox";
import { ChangeEvent, useState } from "react";
import Button from "../../components/Button/Button";

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
    <Link to="/anime">
     <Button
       name={"Back to Anime List"}
       className="information__button information__button--home"
     />
   </Link>
 <div className="information__container">
   <figure className="information__image">
     <img
       className="information__image--pic"
       src={animes?.image}
       alt={animes.title}
     />
   </figure>
   <section className="information__text">
     <h1 className="information__text--title">{animes.title}</h1>
     <h2 className="information__text--author">{animes.author}</h2>
     <h3 className="information__text--year">{animes.year_of_release}</h3>
     <h4 className="information__text--extra">
       Episodes: {animes.episodes}
       <br /> Studio:{" "}
       {!animes || !animes?.information?.studio
         ? "Unknown"
         : animes.information.studio}
     </h4>
     <div className="information__text--selection">
       <Checkbox
         name="watch"
         value="watching"
         label="Currently Watching"
         onChange={handleWatchingChange}
         checked={watchingChecked}
         disabled={false}
       />
       <Checkbox
         name="watch"
         value="want-watch"
         label="Want to Watch"
         onChange={handleWantChange}
         checked={wantChecked}
         disabled={false}
       />
       <Checkbox
         name="watch"
         value="dropped"
         label="Dropped"
         onChange={handleDroppedChange}
         checked={droppedChecked}
         disabled={false}
       />
     </div>
     <p className="information__text--description">
       {!animes || !animes?.information?.animeDescription
         ? "Unknown"
         : animes.information.animeDescription}
     </p>
{/*      <div className="information__edit">
    <Button
         name={"Update"}
         className={"information__button information__button--update"}
         onClick={handleShowForm}
       />
       <Button
         name={"Delete"}
         className={"information__button information__button--delete"}
       />
     </div>
     {showForm && <Form  className="update-anime"  />} */}
   </section>
   </div>  
 </section>
  );
};

export default InfoPage;