import React from "react";
import Spacial from "./Spacial";

const Cousin = ({ name, asset }) => {
  return (
    <div>
      <h3>{name}</h3>
      {name === "Tom Tom" && <Spacial asset={asset} />}
    </div>
  );
};

export default Cousin;
