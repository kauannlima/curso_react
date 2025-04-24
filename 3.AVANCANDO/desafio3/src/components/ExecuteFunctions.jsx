import React from "react";

const ExecuteFunctions = ({ myFunction }) => {
  return (
    <div>
      <button onClick={myFunction}>Clique aqui para executar a função!</button>
    </div>
  );
};

export default ExecuteFunctions;
