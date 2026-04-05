import React from 'react';
import Dad from './Dad';
import Uncle from './Uncle';
import Ant from './Ant';

const GrandPa = () => {
  return (
    <div>
      <h3>GandPa</h3>
      <section className='flex'>
        <Dad />
        <Uncle />
        <Ant />
      </section>
    </div>
  );
};

export default GrandPa;