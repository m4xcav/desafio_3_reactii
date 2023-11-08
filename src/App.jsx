import { Routes, Route } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import Menu from "./components/Menu";
import Home from "./views/Home";
import Pokemones from "./views/Pokemones";
import { PokeContext } from "./context/pokeContext";
const PokeApi = "https://pokeapi.co/api/v2/pokemon/";


const App = () => {
  const {api, setApi} = useContext(PokeContext);
  useEffect(() => {
    setApi(PokeApi);
  }, []);

  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemones" element={<Pokemones />} />
      </Routes>
    </div>
  );
};
export default App;
