import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import PokemonCard from "../components/PokemonCard";

const Detalle = () => {
    const { name } = useParams();
    const [pokemon, setPokemon] = useState({})

    const url = `https://pokeapi.co/api/v2/pokemon/${name}`

     const getPokemon = async () => {
        const res = await fetch(url);
        const data = await res.json();

        const src = data.sprites.other.dream_world.front_default
        const stats = data.stats
        const tipo = data.types.map(p=>p.type.name);
        setPokemon({src, name, tipo, stats});
       
    }

    useEffect(() => {
        getPokemon();
    }, [])

    
  return (
    <>
      <PokemonCard pokemon={pokemon} />
    </>
  )
}

export default Detalle