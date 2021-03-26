import React, { useState } from "react";

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
      const formData = {
        username,
        password,
      }
      console.log(formData);
    }
  

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create an Account</h1>
      <label> Username </label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label> Password </label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
      />
      <input type="submit" value="Sign Up" />
    </form>
  );
}

export default SignUp;
