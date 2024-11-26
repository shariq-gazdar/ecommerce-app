import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState(0);
  return (
    <div className="bg-gradient-to-b from-slate-800 to-slate-700 text-white">
      <Navbar cart={cart} />
      <Cards setCart={setCart} cart={cart} />
    </div>
  );
}

export default App;
