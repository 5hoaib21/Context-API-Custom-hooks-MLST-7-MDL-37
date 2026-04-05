import React, { useRef } from 'react';

const UnControlledField = () => {
  const emailRef = useRef('')
  const passwordRef = useRef('')


  const handleSubmit = e => {
    e.preventDefault()
    const email = emailRef.current.value;
    const password = passwordRef.current.value; 
    console.log(email, password);
  }


  return (
    <div>
      <h2>UnControlledField</h2>
      <form onSubmit={handleSubmit}>
        <input ref={emailRef} type="text" name="" />
        <br />
        <input ref={passwordRef} type="password" name="" />
        <br />
        <input type="submit" value="Submit" />
      </form>

    </div>
  );
};

export default UnControlledField;