import React from "react";
import "./App.css";
import Decode from "./components/Decode";
import Encode from "./components/Encode";

function App() {
  return (
    <div className="App">
      <header></header>
      <main>
        <Encode/>
        <Decode/>
      </main>
    </div>
  );
}

export default App;