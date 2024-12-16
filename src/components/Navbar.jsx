import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  let cartItems = JSON.parse(localStorage.getItem(props.user)) || [];
  let cartNumber = cartItems.length;

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="bg-[#1a0000] text-white">
        <div className="container mx-auto flex items-center justify-between px-4 py-2">
          {/* Left Logo Section */}
          <div className="flex items-center">
            <div className="bg-orange-500 text-white text-sm font-bold px-3 py-1 rounded-full mr-4 text-center">
              SG Store
            </div>
            <ul className="hidden md:flex items-center space-x-6">
              <li className="hover:underline cursor-pointer">Best Sellers</li>
              <li className="hover:underline cursor-pointer">New Arrivals</li>
            </ul>
          </div>

          {/* Search bar */}
          <div className="flex-grow mx-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-white text-black px-4 py-2 rounded-full border border-gray-300 focus:outline-none"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black">
                🔍
              </button>
            </div>
          </div>

          {/* Desktop and Mobile Navigation */}
          <div className="flex items-center space-x-4">
            {/* Hamburger Icon for Mobile */}
            <button
              className="md:hidden text-white"
              onClick={toggleMenu} // Toggle menu on click
            >
              ☰
            </button>

            {/* Profile Button */}
            <Link to="/profile">
              <button className="hidden md:block hover:underline">
                {props.user}
              </button>
            </Link>
            <Link to="/support">
              <button className="hover:underline">Support</button>
            </Link>
            <div className="text-sm bg-green-600 px-2 py-1 rounded">EN</div>

            {/* Cart Button */}
            <Link to="/cart">
              <button className="relative">
                🛒
                <span className="absolute top-0 right-0 text-xs bg-red-600 text-white rounded-full px-1">
                  {cartNumber}
                </span>
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#1a0000] text-white p-4 space-y-4">
            <ul>
              <li className="hover:underline cursor-pointer">Best Sellers</li>
              <li className="hover:underline cursor-pointer">New Arrivals</li>
              <li>
                <Link to="/profile" className="hover:underline">
                  {props.user}
                </Link>
              </li>
              <li className="hover:underline cursor-pointer">
                Orders & Account
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
