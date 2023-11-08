import React, { useState, useEffect } from 'react';

export const Home = () => {
  const PokeApi = "https://pokeapi.co/api/v2/pokemon/pikachu";
  const [data, setData] = useState([]);

  const getPokemon = async () => {
    const res = await fetch(PokeApi);
    const datos = await res.json();
    const img = datos.sprites.other.dream_world.front_default;
    setData(img);
  };
  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <>
    <div className="text-center">
    <h1>Bienvenido maestro Pokémon</h1>
      {
        <img
          src={`${data}`}
          alt="Pikachu"
          width="300"
        />
      }
    </div>
    </>
  );
};
export default Home;