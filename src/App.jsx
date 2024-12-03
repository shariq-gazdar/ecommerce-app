import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import AddToCart from "./components/AddToCart";
import Cards from "./components/Cards";
import Signup from "./components/Signup";
import { useState } from "react";
import Hero from "./assets/HeroBanner.png";
import Login from "./components/Login";

function App() {
  const [cart, setCart] = useState(0);
  const [user, setUser] = useState(false);
  const [login, setLogin] = useState(false);
  const [currentUser, setCurrentUser] = useState("");
  return (
    <Router>
      <div className="bg-gradient-to-b from-white to-white text-black">
        <Routes>
          <Route path="/signup" element={<Signup setUser={setUser} />} />
          <Route path="/cart" element={<AddToCart user={currentUser} />} />
          <Route
            path="/login"
            element={
              <Login setLogin={setLogin} setCurrentUser={setCurrentUser} />
            }
          />
          {login ? (
            <Route
              path="/"
              element={
                <>
                  <Navbar user={currentUser} />
                  <img src={Hero} alt="Hero Banner" className="bg-black" />
                  <Cards setCart={setCart} cart={cart} user={currentUser} />
                </>
              }
            />
          ) : (
            <Route path="*" element={<Navigate to="/signup" replace />} />
          )}
        </Routes>
      </div>
    </Router>
  );
}
export default App;
