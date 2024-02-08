import { MouseEvent, MouseEventHandler } from "react";
import NavBar from "./components/NavBar/NavBar";
import FrontPage from "./components/FrontPage/FrontPage";


function App() {

  const animeData = async() => {
      const url = `http://localhost:8080/anime`;
      const res = await fetch(url);
      const data = await res.json();
  }

  const onClick = (event: MouseEvent) => {
      alert("Button clicked")
  }

  return (
   <div className='app'>
    <header>
      <NavBar name="main" onClick={onClick} />
      </header>
      <FrontPage />
   </div>

  )
}

export default App;
