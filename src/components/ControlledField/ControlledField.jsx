import React, { useState } from "react";

const ControlledField = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
      if (password.length < 6) {
        setError(' characters or longer password is required')
      } else{
        setError("");
      }

  };

  const handlePasswordOnChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
    if (password.length < 6) {
      setError("Password must be at least 6 characters or long");
    } else {
      setError("");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Enter your name" required />
        <br />
        <input
          type="password"
          name="password"
          onChange={handlePasswordOnChange}
          defaultValue={password}
          placeholder="Enter your password"
          required
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p style={{ color: "red" }}>
        <small>{error}</small>
      </p>
    </div>
  );
};

export default ControlledField;
