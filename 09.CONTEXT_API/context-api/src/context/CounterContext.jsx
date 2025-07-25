// 1 - CRIAR O CONTEXTO
import { createContext, useState } from "react";

export const CounterContext = createContext();

// 2 - CRIAR O PROVIDER
export const CounterContextProvider = ({ children }) => {
  const [counter, setCounter] = useState(5);

  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterContext.Provider>
  );
};
