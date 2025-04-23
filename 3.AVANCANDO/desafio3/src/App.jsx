import { useState } from "react";
import "./App.css";
import Paisagem from "./assets/paisagem.jpg";
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";
import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";

function App() {
  const [count, setCount] = useState(0);

  const name = "Joaquim";
  const [userName] = useState("Maria");

  return (
    <>
      <h1>Avançando no React</h1>
      {/*Imagem em public*
      <div>
       <img src="/img1.jpg" alt="Logo do React" />
      </div>
      /}
      {/*Imagem em asset
      <div>
        <img src={Paisagem} alt="Paisagem aleatoria" />
      </div>
      */}
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/*Props*/}
      <ShowUserName name={userName} />
      {/*destructuring*/}
      <CarDetails brand="BMW" km={100000} color="Azul" />
    </>
  );
}

export default App;
