import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

export const Pokemones = () => {
  const navigate = useNavigate();
  const [pokelist, setPokeList] = useState([]);
  const [pokemonSelect, setPokemonSelect] = useState("");

  const URL_API = "https://pokeapi.co/api/v2/pokemon/";

  async function getApi() {
    const fetchedPokemons = [];
    for (let i = 1; i <= 20; i++) {
      try {
        const response = await fetch(URL_API + i);
        if (response.ok) {
          const data = await response.json();
          fetchedPokemons.push(data);
        } else {
          console.error('Error al obtener datos:', response.statusText);
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
      }
    }
    setPokeList(fetchedPokemons);
  }

  const setNavigate = () => {
      navigate(`/pokemones/${pokemonSelect}`);
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <>
      <div className="text-center">
        <h1>Pokemones</h1>
        <p>haz doble click para obtener los detalles del Pokemon</p>
        <div className="gallery grid-columns-3 p-3">
          {pokelist.map((poke) => (
            <div key={poke.id} 
            onClick={() => {
              setPokemonSelect(poke.name);
              setNavigate();
            }}
            className="photo" style={{ backgroundImage: `url(${poke.sprites.other.dream_world.front_default})` }}>
              <p>{poke.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Pokemones;
