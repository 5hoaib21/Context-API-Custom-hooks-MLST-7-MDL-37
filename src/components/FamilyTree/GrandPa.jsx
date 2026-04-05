import React from "react";
import Dad from "./Dad";
import Uncle from "./Uncle";
import Ant from "./Ant";

const GrandPa = ({ asset }) => {
  return (
    <div>
      <h3>GandPa</h3>
      <section className="flex">
        <Dad asset={asset} />
        <Uncle />
        <Ant asset={asset} />
      </section>
    </div>
  );
};

export default GrandPa;
