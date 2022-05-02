import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Card from "./components/Card";
import data from "./data";

function App() {

  const cards = data.map((item) => {
    return (
      <Card id={item.id} 
            {...item}
      />
    )
  });
  return (
    <div className="App">
      <Navbar />
      <About />
      <section className="cards--list">
        {cards}
      </section>
    </div>
  );
}

export default App;
