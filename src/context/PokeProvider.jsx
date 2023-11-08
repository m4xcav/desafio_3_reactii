import React, { useState} from "react";
import { PokeContext } from "./pokeContext";
const PokeProvider = ({ children }) => {
  const [api, setApi] = useState('');

  return (
    <PokeContext.Provider value={{ api, setApi }}>
      {children}
    </PokeContext.Provider>
  );
};

export default PokeProvider;