import "./Home.scss";

const Home = () => {
  return (
    <section className="home">
      <h1 className="home__intro home__intro--one">
        Welcome to The Anime Directory where you can keep track of all the anime
        you have watched.
      </h1>
      <h1 className="home__intro home__intro--two">
        The directory starts with nine anime series curated by the creator,
        Sacha, for you to try.
      </h1>
    </section>
  );
};

export default Home;
