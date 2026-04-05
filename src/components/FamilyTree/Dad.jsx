import React from 'react';
import Myself from './Myself';
import Bro from './Bro';
import Sis from './Sis';

const Dad = () => {
  return (
    <div>
      <h3>dad</h3>
      <section className='flex'>
        <Myself />
        <Bro />
        <Sis />
      </section>
    </div>
  );
};

export default Dad;