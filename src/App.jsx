import { Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./views/Home";
import Pokemones from "./views/Pokemones";


const App = () => {
 
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
