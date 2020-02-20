import React from "react";
import "./index.css";
import Header from "./Components/Header";
import ImageContainer from "./Components/ImageContainer/ImageContainer";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <header>
      <Header />
      <ImageContainer />
      <Footer />
    </header>
  );
}

export default App;
