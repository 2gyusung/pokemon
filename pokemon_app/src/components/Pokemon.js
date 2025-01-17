import React from 'react'

const Pokemon = ({pokemon}) => {
  console.log('pokemon.korean_flavor', pokemon.korean_flavor);
  
  return (
    
    <div className='pokemon' key={pokemon.id}>
    <img src={pokemon.sprites.front_default} alt={pokemon.korean_name}/> {/* alt={pokemon.korean_name} key값으로 저장 */}
    <p className='pokemon_title'>{pokemon.korean_name}</p>
    
    {/* { 맵으로 해서 하는 법
      pokemon.korean_flavor.map(flavor => 
        <p className='pokemon_description'>
        {flavor.flavor_text} {/*  */}
      {/* </p> */}
    <p className='pokemon_description'>
      {pokemon.korean_flavor[0].flavor_text} {/*  */}
    </p>
    <p>{pokemon.id}</p>
  </div>
    
  )
}

export default Pokemon
