import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import { useState } from "react";
import Hero from "./assets/HeroBanner.png";
function App() {
  const [cart, setCart] = useState(0);
  return (
    <div className="bg-gradient-to-b from-slate-300 to-slate-300 text-black">
      <Navbar cart={cart} />
      <img src={Hero} alt="" className="bg-black" />
      <Cards setCart={setCart} cart={cart} />
    </div>
  );
}

export default App;
