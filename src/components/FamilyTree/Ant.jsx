import React from 'react';
import Cousin from './Cousin';

const Ant = ({asset}) => {
  return (
    <div>
      <h3>Aunt</h3>
        <section className='flex'>
        <Cousin asset={asset}  name='Tom Tom' />
        <Cousin name='Jo Jooo' />
      </section>
    </div>
  );
};

export default Ant;