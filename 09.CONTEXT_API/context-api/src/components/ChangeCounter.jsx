// 3 - ALTERANDO CONTEXTO
import { useContext } from "react";

import { CounterContext } from "../context/CounterContext";

import React from "react";

const ChangeCounter = () => {
  const { counter, setCounter } = useContext(CounterContext);

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>
        Add value to counter
      </button>
    </div>
  );
};

export default ChangeCounter;
