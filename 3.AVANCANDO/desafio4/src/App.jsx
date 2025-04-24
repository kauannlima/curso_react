import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UserDetails from "./components/UserDetails";

function App() {
  const [count, setCount] = useState(0);

  const users = [
    { id: 1, nome: "Kauan", idade: 21, profissão: "Assistente Help Desk" },
    { id: 1, nome: "Juliana", idade: 19, profissão: "Open To Work" },
    { id: 1, nome: "Luiz Miguel", idade: 12, profissão: "Estudante" },
  ];

  return (
    <>
      {/*loop em array de objetos*/}
      {users.map((user) => (
        <UserDetails
          key={user.id}
          nome={user.nome}
          idade={user.idade}
          profissão={user.profissão}
        />
      ))}
    </>
  );
}

export default App;
