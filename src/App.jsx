import React from "react";
import "./App.css";
import Counter from "./Components/Counter";
import Toggle from "./Components/Toggel";
import Styling from "./Components/Styling";

const App = () => {
  return (
    <main>
      <h1>Welcome to React</h1>
      <Counter />
      <Toggle />
      <Styling />
    </main>
  );
};

export default App;
