import React from "react";

// import { useContext } from "react";

// import { CounterContext } from "../context/CounterContext";

import ChangeCounter from "../components/ChangeCounter";

// 4 - REFATORANDO COM HOOK
import { useCounterContext } from "../hooks/useCounterContext";

import { useTitleColorContext } from "../hooks/useTitleColorContext";

const About = () => {
  const { counter } = useCounterContext();

  // 5 - CONTEXT MAIS COMPLEXOS
  const { color } = useTitleColorContext();

  return (
    <div>
      <h1 style={{ color: color }}>About</h1>
      <p>Valor do contador: {counter}</p>
    </div>
  );
};

export default About;
