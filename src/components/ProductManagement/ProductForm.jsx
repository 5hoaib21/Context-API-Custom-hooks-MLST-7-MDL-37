import React, { useState } from 'react';

const ProductForm = ({handleAddProduct}) => {
  const [error, setError] = useState('')
  const handleProductSubmit = e =>{
   e.preventDefault() 
    const name = e.target.name.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    // console.log(name , price , quantity);

    // validation
    if(name.length === 0){
      setError('Please Provide a Product Name')
      return;
    }
    else if (price.length === 0){
      setError('Please Provide a Product"s price ')
      return;
    }else if (price < 0){
      setError('Price can not be negative')
      return;
    }
    else if (quantity.length === 0){
      setError('Please Provide a Product"s Quantity ')
      return;
    }else if (quantity < 0){
      setError('Quantity can not be negative')
      return;
    }
    else{
      setError('')
    }




    const newProduct = {
      name,
      price,
      quantity
    }
    if(!error){

      handleAddProduct(newProduct);
    }
    // console.log(newProduct);

  }




  return (
    <div>
    <h3>Add a product</h3>
      <form onSubmit={handleProductSubmit}>
        <input type="text" name="name" placeholder='Product Name'  />
        <br />
        <input type="text" name="price" placeholder='Product Price'  />
        <br />
        <input type="text" name="quantity" placeholder='Product Quantity'  />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p style={{color: 'red'}}><small>{error}</small></p>
    </div>
  );
};

export default ProductForm;