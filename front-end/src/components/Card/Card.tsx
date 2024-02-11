import "./Card.scss";

type CardProps = {
    id: number;
    name: string;
    year: number;
  };
  
  const Card = ({ id, name, year }: CardProps) => {
    return (
      <div className="anime-card" key={id}>
        <div className="anime-card__info">
          <h1 className="anime-card__name">{name}</h1>
          <h2 className="anime-card__year">{year}</h2>
        </div>
      </div>
    );
  };
  
  export default Card;