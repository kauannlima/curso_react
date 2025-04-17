import { useState } from "react";
import "./App.css";
import Paisagem from "./assets/paisagem.jpg";
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Avançando no React</h1>

      {/*Imagem em public*/}
      <div>
        <img src="/img1.jpg" alt="Logo do React" />
      </div>

      {/*Imagem em asset*/}
      <div>
        <img src={Paisagem} alt="Paisagem aleatoria" />
      </div>
      <ManageData />
      <ListRender />
    </>
  );
}

export default App;
