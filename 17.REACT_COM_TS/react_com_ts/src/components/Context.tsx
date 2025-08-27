import React, { useContext } from "react";

import { AppContext } from "../App";

const Context = () => {
  const deatils = useContext(AppContext);

  return (
    <>
      {deatils && (
        <div>
          <h2>Linguagem: {deatils.language}</h2>
          <h4>FW: {deatils.framework}</h4>
          <p>QTD: {deatils.projects}</p>
        </div>
      )}
    </>
  );
};

export default Context;
