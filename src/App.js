import React from "react";
import "./App.css";
import Logo from "./Assets/nasa-logo.png";
import ImageContainer from "./Components/ImageContainer/ImageContainer";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img className="App-logo" src={Logo} alt="NASA logo" />
        <h1>NASA's Astronomy Photo of the Day</h1>
      </div>
      <ImageContainer />
      <Footer />
    </div>
  );
}

export default App;
