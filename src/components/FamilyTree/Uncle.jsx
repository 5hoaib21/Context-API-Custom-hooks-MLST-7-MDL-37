import React from 'react';
import Cousin from './Cousin';

const Uncle = () => {
  return (
    <div>
      <h3>uncle</h3>
      <section className='flex'>
        <Cousin name='Rafsan' />
        <Cousin name='Jassha' />
      </section>
    </div>
  );
};

export default Uncle;