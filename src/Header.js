import React, { useState } from "react";

function Header() {

const [clicks, setClicks] = useState(0)

  function handleClick(event){
    setClicks(clicks + 1)
    console.log(event)
  }

  return (
    <div>
      <h1> SunJet's Todo App </h1>
      <button onClick={handleClick}>Click me</button>
      <p>Clicks:{clicks}</p>
      <p> Please enter a task </p>
    </div>
  );
}

export default Header;
