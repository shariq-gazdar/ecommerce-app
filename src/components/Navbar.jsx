import React from "react";

function Navbar(props) {
  return (
    <div>
      <nav className="bg-[#1a0000] text-white">
        <div className="container mx-auto flex items-center justify-between px-4 py-2">
          {/* Left Logo Section */}
          <div className="flex items-center">
            <div className="bg-orange-500 text-white text-sm font-bold px-3 py-1 rounded-full mr-4">
              SG Store
            </div>
            <ul className="hidden md:flex items-center space-x-6">
              <li className="hover:underline cursor-pointer">Best Sellers</li>
              <li className="hover:underline cursor-pointer">New Arrivals</li>
            </ul>
          </div>

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

          <div className="flex items-center space-x-4">
            <button className="hidden md:block hover:underline">
              {props.user}
            </button>
            <button className="hidden md:block hover:underline">
              Orders & Account
            </button>
            <button className="hover:underline">Support</button>
            <div className="text-sm bg-green-600 px-2 py-1 rounded">EN</div>
            <button className="relative">
              🛒
              <span className="absolute top-0 right-0 text-xs bg-red-600 text-white rounded-full px-1">
                {props.cart}
              </span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
