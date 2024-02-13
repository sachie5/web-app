import "./Card.scss";

type CardProps = {
    id: number;
    title: string;
    image: string;
    year_of_release: number;
  };
  
  const Card = ({ id, title, image, year_of_release }: CardProps) => {
    return (
      <div className="anime-card" key={id}>
          <img className="anime-card__image" src={image} alt={title} />
          <h1 className="anime-card__name">{title}</h1>
          <h2 className="anime-card__year">{year_of_release}</h2>
      </div>
    );
  };
  
  export default Card;