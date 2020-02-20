import React from "react";
import "../src/css/index.css";
import Header from "./Components/Header";
import ImageContainer from "./Components/ImageContainer/ImageContainer";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <div class="bg-indigo-900 text-center py-4 lg:px-4">
      <a href="https://officialnasagear.com/?gclid=Cj0KCQiA-bjyBRCcARIsAFboWg0HRc6_JfplEZtymPho3JY7L_KWo8wlHpRZCvE5HkLNXO4SOFP7QVQaAkr7EALw_wcB">
          <div class="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
            <span class="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-base font-bold mr-3">Love NASA?</span>
            <span class="font-semibold mr-2 text-left flex-auto text-lg">Support their astronauts &amp; get the coolest gear from their store</span>
            <svg class="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
          </div>
        </a>
      </div>
      <Header />
      <ImageContainer />
      <Footer />
    </div>
  );
}

export default App;
