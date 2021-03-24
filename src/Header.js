import React from "react";

function Header() {

  function handleClick(event){
    console.log(event)
  }

  return (
    <div>
      <h1> SunJet's Todo App </h1>
      <button onClick={handleClick}>Click me</button>
      <p> Please enter a task </p>
    </div>
  );
}

export default Header;
