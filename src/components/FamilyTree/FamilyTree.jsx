import React, { createContext } from "react";
import GrandPa from "./GrandPa";
import "./FamilyTree.css";


export const AssetContext = createContext('');

const FamilyTree = () => {
  const asset = "diamond";
  const newAsset = 'gold'
  return (
    <div className="familyTree">
      <h2>family tree</h2>
      <AssetContext.Provider value={newAsset}>
        <GrandPa asset={asset} />
      </AssetContext.Provider>
    </div>
  );
};

export default FamilyTree;
