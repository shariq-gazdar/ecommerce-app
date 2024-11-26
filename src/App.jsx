import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Signup from "./components/Signup"; // Import your Signup component
import { useState } from "react";
import Hero from "./assets/HeroBanner.png";

function App() {
  const [cart, setCart] = useState(0);
  const [user, setUser] = useState(false);
  const users = [];

  return (
    <div className="bg-gradient-to-b from-slate-300 to-slate-300 text-black">
      {user ? (
        <Signup users={users} setUser={setUser} />
      ) : (
        <>
          <Navbar cart={cart} />
          <img src={Hero} alt="Hero Banner" className="bg-black" />
          <Cards setCart={setCart} cart={cart} />
        </>
      )}
    </div>
  );
}

export default App;
