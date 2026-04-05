import React from 'react';

const SimpleForm = () => {



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value, e.target.email.value);
    
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" id="" placeholder='Your name' />
        <br />
        <input type="email" name="email" id="" placeholder='Your email' />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SimpleForm;