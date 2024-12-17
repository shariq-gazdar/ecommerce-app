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
import { useState, useEffect } from "react";
import Hero from "./assets/HeroBanner.png";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Support from "./components/Support";
import Dashboard from "./components/Dashboard";

function App() {
  const [user, setUser] = useState(false);
  const [currentUser, setCurrentUser] = useState("");
  let sessionUser = sessionStorage.getItem("currentUser");
  useEffect(() => {
    if (sessionUser) {
      setUser(true);
      setCurrentUser(sessionUser);
    }
  }, [sessionUser]);
  const [cart, setCart] = useState(0);
  const [login, setLogin] = useState(false);
  const [cartPrice, setCartPrice] = useState(0);
  let loginState = sessionStorage.getItem("loginState");
  console.log(loginState);

  return (
    <Router>
      <div className="bg-gradient-to-b from-white to-white text-black">
        <Routes>
          <Route path="/signup" element={<Signup setUser={setUser} />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/cart"
            element={
              <AddToCart user={currentUser} setCartPrice={setCartPrice} />
            }
          />
          <Route path="/profile" element={<Profile user={currentUser} />} />
          <Route path="/support" element={<Support />} />
          <Route
            path="/login"
            element={
              <Login setLogin={setLogin} setCurrentUser={setCurrentUser} />
            }
          />
          {loginState ? (
            <Route
              path="/"
              element={
                <>
                  <Navbar user={currentUser} />
                  <img
                    src={Hero}
                    alt="Hero Banner"
                    className="bg-black h-52 object-cover lg:object-contain lg:h-full"
                  />
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
