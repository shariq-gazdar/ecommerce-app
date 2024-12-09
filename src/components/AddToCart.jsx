import React, { useState } from "react";
import Home from "../assets/home.svg";
import { Link } from "react-router-dom";

function AddToCart(props) {
  const user = props.user;

  // Initialize state with cart items from localStorage
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem(user)) || []
  );

  // Helper function to extract numbers from strings
  const numFy = (num) => {
    let numOnly = num.replace(/[^\d]/g, "");
    return Number(numOnly);
  };

  // Calculate total
  const total = cartItems.reduce((acc, item) => acc + numFy(item.price), 0);

  // Remove an item
  const removeItem = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
    localStorage.setItem(user, JSON.stringify(updatedCartItems));
  };

  return (
    <div>
      <div className="w-full h-full flex items-center justify-between px-10">
        <h1 className="text-center font-bold">{user}'s Cart</h1>
        <Link to="/">
          <img src={Home} alt="Home" />
        </Link>
      </div>
      <div className="p-5">
        {cartItems.length > 0 ? (
          cartItems.map((cartItem, index) => (
            <div
              key={index}
              className="border border-gray-400 p-4 rounded-lg shadow-md mb-4 flex justify-between items-center"
            >
              <div>
                <h2 className="font-bold text-lg">{cartItem.name}</h2>
                <p>{cartItem.description}</p>
                <p className="text-gray-700">Price: Rs.{cartItem.price}</p>
              </div>
              <button
                className="bg-orange-500 p-1 px-4 rounded-lg text-white w-fit hover:bg-orange-500/85 border border-black font-semibold"
                onClick={() => removeItem(index)}
              >
                Remove Item
              </button>
            </div>
          ))
        ) : (
          <h2 className="text-center text-gray-500">Your cart is empty!</h2>
        )}
      </div>
      <h1 className="text-center font-bold">
        Total Price: Rs.<span className="text-red-600">{total}</span>
      </h1>

      <div className="text-center w-fit bg-green-400 mx-auto p-2 rounded-xl cursor-pointer hover:bg-green-500">
        Checkout
        <span className="ml-2 text-sm font-medium text-gray-700">
          ({cartItems.length} items)
        </span>
      </div>
    </div>
  );
}

export default AddToCart;
