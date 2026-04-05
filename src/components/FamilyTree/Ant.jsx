import React from 'react';
import Cousin from './Cousin';

const Ant = () => {
  return (
    <div>
      <h3>Aunt</h3>
        <section className='flex'>
        <Cousin name='Alvi' />
        <Cousin name='Prova' />
      </section>
    </div>
  );
};

export default Ant;