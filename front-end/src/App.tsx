import { FormEvent, MouseEvent, MouseEventHandler, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import FrontPage from "./components/FrontPage/FrontPage";
import FilterBar from "./components/FilterBar/FilterBar";


function App() {

  const[searchTerm, setSearchTerm] = useState<string>("");

  const animeData = async() => {
      const url = `http://localhost:8080/anime`;
      const res = await fetch(url);
      const data = await res.json();
  }

  const onClick = (event: MouseEvent) => {
      alert("Button clicked")
  }

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const newInput = event.currentTarget.value.replace(" ", "").toLowerCase();
    setSearchTerm(newInput);
};

  return (
   <div className='app'>
    <header>
      <NavBar name="main" onClick={onClick} />
      </header>
      <FrontPage />
      <FilterBar name="filter" handleInputFunction={handleInput} searchTerm={searchTerm}/>
   </div>

  )
}

export default App;
