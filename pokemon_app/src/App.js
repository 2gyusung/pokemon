import React from "react";
import "./main.scss";
import PokemonIndex from './components/PokemonIndex';


const App = () => {

  return (
    <div className="App">
      <h1>포켓몬 도감📓</h1>
      <PokemonIndex/>
    </div>
  );
};

export default App;
