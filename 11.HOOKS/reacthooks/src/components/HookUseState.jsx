import { useState } from "react";

const HookUseState = () => {
  //1 - useState
  let userName = "João";

  const [name, setName] = useState("Matheus");

  const changesNames = () => {
    userName = "João Souza";

    setName("Matheus Battisti");

    console.log(userName);
    console.log(name);
  };

  //2 - useState e input
  const [age, setAge] = useState(18);

  const handleSubmit = (e) => {
    e.preventDefault();

    //envio a uma API
    console.log(age);
  };

  return (
    <div>
      {/*1 - useState*/}
      <h2>useState</h2>
      <p>Variável: {userName}</p>
      <p>useState: {name}</p>
      <button onClick={changesNames}>Mudar nomes!</button>
      {/*2 - useState e input*/}
      <p>Digite sua idade</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input type="submit" value="Enviar" />
      </form>
      <p>Votem tem {age} anos!</p>
      <hr />
    </div>
  );
};

export default HookUseState;
