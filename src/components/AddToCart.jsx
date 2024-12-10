import React, { useState } from "react";
import Home from "../assets/home.svg";
import { Link } from "react-router-dom";

function AddToCart({ user }) {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem(user)) || []
  );

  const numFy = (num) => Number(num.replace(/[^\d]/g, ""));

  const total = cartItems.reduce((acc, item) => acc + numFy(item.price), 0);

  const removeItem = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
    localStorage.setItem(user, JSON.stringify(updatedCartItems));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-6">
      {/* Header */}
      <div className="flex items-center justify-between w-full max-w-4xl px-6 mb-6">
        <h1 className="text-2xl font-bold text-gray-800">{user}'s Cart</h1>
        <Link to="/">
          <img src={Home} alt="Home" className="w-8 h-8" />
        </Link>
      </div>

      {/* Cart Items */}
      <div className="w-full max-w-4xl p-4 bg-white shadow-md rounded-lg">
        {cartItems.length > 0 ? (
          cartItems.map((cartItem, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b border-gray-300 py-4"
            >
              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  {cartItem.name}
                </h2>
                <p className="text-gray-600">{cartItem.description}</p>
                <p className="text-gray-700 font-medium">
                  Price: Rs.{cartItem.price}
                </p>
              </div>
              <button
                className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition"
                onClick={() => removeItem(index)}
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <h2 className="text-center text-gray-500 py-10">
            Your cart is empty!
          </h2>
        )}
      </div>

      {/* Total Price */}
      <div className="mt-6 w-full max-w-4xl flex justify-between items-center px-4">
        <h1 className="text-lg font-bold text-gray-800">
          Total Price: <span className="text-red-600">Rs.{total}</span>
        </h1>
        <button
          className={`bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition ${
            cartItems.length === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={cartItems.length === 0}
        >
          Checkout ({cartItems.length} items)
        </button>
      </div>
    </div>
  );
}

export default AddToCart;
