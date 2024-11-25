import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState(0);
  return (
    <div className="h-full bg-gray-600 text-white">
      <Navbar cart={cart} />
      <Cards setCart={setCart} cart={cart} />
    </div>
  );
}

export default App;
