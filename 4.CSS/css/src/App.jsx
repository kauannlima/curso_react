import { useState } from "react";
import "./App.css";
import MyComponent from "./components/MyComponent";

function App() {
  const n = 15;
  const [name] = useState("Matheus");
  const [redTitle] = useState(true);

  return (
    <>
      {/*CSS GLOBAL*/}
      <h1>React com CSS</h1>

      {/*CSS DE COMPONENTE*/}
      <MyComponent />

      <p>Este parágrafo é do App.jsx</p>

      {/*INLINE CSS*/}
      <p style={{ color: "blue", padding: "25px", borderTop: "2px solid red" }}>
        Este elemento foi estilizado de forma inline
      </p>

      {/*INLINE CSS DINÂMICO*/}
      <h2 style={n < 10 ? { color: "purple" } : { color: "pink" }}>
        CSS Dinâmico
      </h2>
      <h2 style={n > 10 ? { color: "purple" } : { color: "pink" }}>
        CSS Dinâmico
      </h2>
      <h2
        style={
          name === "Matheus"
            ? { color: "green", backgroundColor: "#000" }
            : null
        }
      >
        Teste nome
      </h2>

      {/*CLASSE DINÃMICA*/}
      <h2 className={redTitle ? "red-title" : "title"}>
        Este título vai ter classe dinâmica
      </h2>
      <h2 className={redTitle ? "title" : "red-title"}>
        Este título vai ter classe dinâmica
      </h2>
    </>
  );
}

export default App;
