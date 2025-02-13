import React from "react";
import "./main.scss";
import PokemonIndex from './components/PokemonIndex';
import Search from './components/Search';


const App = () => {

  return (
    <div className="App">
      <h1>포켓몬 도감📓</h1>
      <Search/>
      <PokemonIndex/>
    </div>
  );
};

export default App;
