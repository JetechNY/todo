import React, { useState } from "react";

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }

  return(
  <div>
<form onSubmit={handleSubmit}>
  <h1>Create an Account</h1>
  <label> Username </label>
  <input
    type="text"
    id="username"
    value={username}
    onChange={(e)=> setUsername(e.target.value)}
    />
  <label> Password </label>
  <input type="submit" value= "Sign Up"/>

</form>
  </div>;

  )
}

export default SignUp();
