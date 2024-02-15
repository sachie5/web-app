import Form from "../../components/Form/Form";
import "./AddAnime.scss"
import { useNavigate } from "react-router-dom";
import { AnimeRequest } from "../../types/AnimeRequest";

type AddAnimeProps = {
    genres: string[];
}

const AddAnime = ({genres}: AddAnimeProps) => {
    const navigate = useNavigate();

    const handleSubmit = async (newAnime: AnimeRequest) => {
        console.log("Submitting new anime:", newAnime);
        const result = await fetch("http://localhost:8080/anime/new", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newAnime),
        });
        navigate("/anime")
    }
    
    const defaultFormState = { id: -1, title: "", author: "", image: "" , episodes: - 1, year_of_release: -1, genre: ""};
    
    return (
        <section className="add">
            <h1 className="add__heading">Add a new anime </h1>
            <Form classname="add-form" items={genres} handleSubmit={handleSubmit} defaultFormState={defaultFormState} defaultValue={genres[10]} />
        </section>
    )
}

export default AddAnime;