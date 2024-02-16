import { ChangeEvent, FormEvent, MouseEventHandler, useState } from "react";
import Button from "../Button/Button";
import Dropdown from "../Dropdown/Dropdown";
import "./Forms.scss";
import { AnimeRequest } from "../../types/AnimeRequest";

type FormProps = {
  defaultFormState: AnimeRequest;
  classname: string;
  items: string[];
  handleSubmit: (anime: AnimeRequest) => void;
  defaultValue: string;
};

const Form = ({
  defaultFormState,
  classname,
  items,
  handleSubmit,
  defaultValue,
}: FormProps) => {
  const [anime, setAnime] = useState<AnimeRequest>(defaultFormState);
  const [formdata, setFormdata] = useState({
    id: -1,
    title: "",
    author: "",
    image: "",
    episodes: 1,
    year_of_release: 2023,
  });

  const handleValidation = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(anime);
    handleSubmit(anime);
  };

  const handleInput = (
    event: FormEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    const name = event.currentTarget.name;
    const value = event.currentTarget.value;
    setFormdata((prevFormData) => ({ ...prevFormData, [name]: value }));
    setAnime({ ...anime, [name]: value });
  };

  return (
    <form className={classname} onSubmit={handleValidation}>
      <label className={`${classname}__label`} htmlFor="title">
        Title:{" "}
      </label>
      <input
        className={`${classname}__input`}
        type="text"
        id="title"
        name="title"
        onChange={handleInput}
        value={formdata.title}
      />
      <br />
      <label className={`${classname}__label`} htmlFor="author">
        Author:{" "}
      </label>
      <input
        className={`${classname}__input`}
        type="text"
        id="author"
        name="author"
        onChange={handleInput}
        value={formdata.author}
      />
      <br />
      <label className={`${classname}__label`} htmlFor="image">
        Image:{" "}
      </label>
      <input
        className={`${classname}__input`}
        type="text"
        id="image"
        name="image"
        onChange={handleInput}
        value={formdata.image}
      />
      <br />
      <label className={`${classname}__label`} htmlFor="episodes">
        Episodes:{" "}
      </label>
      <input
        className={`${classname}__input`}
        type="text"
        id="episodes"
        name="episodes"
        onChange={handleInput}
        value={formdata.episodes}
      />
      <br />
      <label className={`${classname}__label`} htmlFor="year_of_release">
        Year:{" "}
      </label>
      <input
        className={`${classname}__input`}
        type="text"
        id="year_of_release"
        name="year_of_release"
        onChange={handleInput}
        value={formdata.year_of_release}
      />
      <br />
      <Dropdown
        label="Genres: "
        name="genres"
        items={items}
        classname={`${classname}__dropdown"`}
        onChange={handleInput}
        defaultValue={defaultValue}
      />
      <Button name="Submit" className={`${classname}__button`} />
    </form>
  );
};

export default Form;
