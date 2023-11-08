import React, { useContext, useState, useEffect } from 'react';
import { PokeContext } from '../context/pokeContext';

export const Home = () => {
  const PokeApi = "https://pokeapi.co/api/v2/pokemon/pikachu";
  const [data, setData] = useState([]);
 
  const photo = data.sprites.other.dream_world.front_default;
  return (
    <>
    <div className="text-center">
    <h1>Bienvenido maestro Pokémon</h1>
      {
        <img
          src={`${photo}`}
          alt="Pikachu"
          width="300"
        />
      }
    </div>
    </>
  );
};
export default Home;