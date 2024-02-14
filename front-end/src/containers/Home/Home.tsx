import "./Home.scss";

type HomeProps = {

}

const Home = ({}: HomeProps) => {
    return (
        <section className="home">
            <h1>Welcome to The Anime Directory where you can keep track of all the anime you have watched.</h1>
            <h1>The directory starts with 9 anime series curated by the creator, Sacha, for you to try.</h1>
        </section>
    )
}

export default Home;