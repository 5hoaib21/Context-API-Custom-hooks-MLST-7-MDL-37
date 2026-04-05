import React from 'react';
import GrandPa from './GrandPa';
import './FamilyTree.css'

const FamilyTree = () => {
  const asset = 'diamond'
  return (
    <div className='familyTree'>
      <h2>family tree</h2>
      <GrandPa />
    </div>
  );
};

export default FamilyTree;