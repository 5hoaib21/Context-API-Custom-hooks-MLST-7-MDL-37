import React from 'react';
import Myself from './Myself';
import Bro from './Bro';
import Sis from './Sis';

const Dad = ({asset}) => {
  return (
    <div>
      <h3>dad</h3>
      <section className='flex'>
        <Myself asset={asset}  />
        <Bro />
        <Sis />
      </section>
    </div>
  );
};

export default Dad;