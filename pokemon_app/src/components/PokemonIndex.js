import axios from "axios";
import React, { useEffect, useState } from "react";
import Pokemon from './Pokemon';

function PokemonIndex() {
  const [pokemonData, setPokemonData] = useState([]);

  const fetchData = async () => {
    const allPokemonData = [];


    for(let i=1; i <= 200; i++){
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`); //포켓몬정보
      const speciesResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${i}`); //포켓몬스펙정보
      const koreanName = speciesResponse.data.names.find(name => name.language.name === 'ko') //ko만 find 함수를 사용해 찾아서 koreanName 변수에 담는다 find ko 찾으면 끝남
      // console.log(speciesResponse.data);
      const koreanFlavor =  speciesResponse.data.flavor_text_entries.filter(desc => desc.language.name === 'ko'); //포켓몬스펙정보 배열로 담아서 반환
 
      

      
      allPokemonData.push({...response.data ,
         korean_name : koreanName.name, 
         korean_flavor : koreanFlavor}) //...response.data  객체 벗기고 다시  korean_name : koreanName.name key : value 추가해서 감싸준다   korean_flavor : koreanFlavor
    }
    setPokemonData(allPokemonData)
  };

  useEffect(() => {
    fetchData() // 렌더링시 화면 호출
  }, []); //[] 한번만 실행

  console.log(pokemonData);
  
  return (
    <div className="PokemonIndex">
      <div className='inner'>
        {
          pokemonData.map(pokemon=> 
            <Pokemon pokemon={pokemon} key={pokemon.id}/>
          )
        }
      </div>
    </div>
  );
}

export default PokemonIndex;
