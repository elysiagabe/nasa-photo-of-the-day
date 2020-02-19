import React from "react";
import "./App.css";
import Logo from "./Assets/nasa-logo.png"

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img class="App-logo" src={Logo} alt="NASA logo" />
        <h1>NASA's Astronomy Photo of the Day</h1>
      </div>
      
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
