import React, { useState } from 'react';

const ControlledField = () => {

  const [password, setPassword] = useState('secret')






  const handleSubmit = (e) => {
 e.preventDefault();
 console.log('submitted');
  }


  const handlePasswordOnChange = e => {
    console.log(e.target.value);
  }





  return (
    <div>
          <form onSubmit={handleSubmit}>
        <input type="text" name='name'  placeholder='Enter your name' required />
        <br />
        <input type="password" name='password'onChange={handlePasswordOnChange}  defaultValue={password} placeholder='Enter your password' required />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ControlledField;