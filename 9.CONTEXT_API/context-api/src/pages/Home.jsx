import React from "react";
// import { useContext } from "react";

// import { CounterContext } from "../context/CounterContext";

import ChangeCounter from "../components/ChangeCounter";

// 4 - REFATORANDO COM HOOK
import { useCounterContext } from "../hooks/useCounterContext";

// 5 - CONTEXT MAIS COMPLEXOS
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Home = () => {
  // const { counter } = useContext(CounterContext);
  const { counter } = useCounterContext();

  // 5 - CONTEXT MAIS COMPLEXOS
  const { color, dispatch } = useTitleColorContext();

  console.log(color);

  // 6 - ALTERANDO STATE MAIS COMPLEXO
  const setTitleColor = (color) => {
    dispatch({ type: color });
  };

  return (
    <div>
      <h1 style={{ color: color }}>Home</h1>
      <p>Valor do contador: {counter}</p>
      {/*3 - ALTERANDO O VALOR DO CONTEXTO*/}
      <ChangeCounter />
      {/* 6 - ALTERANDO STATE MAIS COMPLEXO*/}
      <div>
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
        <button onClick={() => setTitleColor("BLUE")}>Azul</button>
      </div>
    </div>
  );
};

export default Home;
