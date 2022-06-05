import "./App.css";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";
import React from "react";

function App() {
  const [dark, setDark] = React.useState(true);
  function handleClick() {
    setDark(!dark);
  }
  return (
    <div className={dark ? "App-dark" : "App"}>
      <Navbar dark={dark} handleClick={handleClick} />
      <Main dark={dark} />
    </div>
  );
}

export default App;
