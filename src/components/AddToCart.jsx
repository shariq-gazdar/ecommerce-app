import React, { useState } from "react";
import Home from "../assets/home.svg";
import { Link } from "react-router-dom";

function AddToCart({ user }) {
  const [checkoutVisible, setCheckoutVisible] = useState(false);
  const [cartItems, setCartItems] = useState(() => {
    const storedItems = localStorage.getItem(user);
    return storedItems ? JSON.parse(storedItems) : [];
  });

  const numFy = (num) => Number(num.replace(/[^\d]/g, ""));
  const total = cartItems.reduce((acc, item) => acc + numFy(item.price), 0);

  const removeItem = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
    localStorage.setItem(user, JSON.stringify(updatedCartItems));
  };

  const handleCheckoutConfirm = () => {
    setCartItems([]);
    localStorage.removeItem(user);
    setCheckoutVisible(false);
    alert("Check out completed!");
  };

  return (
    <div className="min-h-svh bg-gray-100 flex flex-col items-center py-6">
      {checkoutVisible && (
        <div className="checkOut fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black/50 z-50">
          <div className="bg-gray-100 font-bold px-10 py-5 rounded-lg">
            <h1>Confirm Checkout</h1>
            <h1 className="text-center">
              Total Bill: <span className="text-red-600">Rs.{total}</span>
            </h1>
            <div className="flex justify-center gap-x-5 py-2">
              <button
                className="bg-green-500 text-white p-2 rounded-lg"
                onClick={handleCheckoutConfirm}
              >
                Yes
              </button>
              <button
                className="bg-red-600 text-white p-2 rounded-lg"
                onClick={() => setCheckoutVisible(false)}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between w-full max-w-4xl px-6 mb-6">
        <h1 className="text-2xl font-bold text-gray-800">{user}'s Cart</h1>
        <Link to="/">
          <img src={Home} alt="Home" className="w-8 h-8" />
        </Link>
      </div>

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

      <div className="mt-6 w-full max-w-4xl flex justify-between items-center px-4">
        <h1 className="text-lg font-bold text-gray-800">
          Total Price: <span className="text-red-600">Rs.{total}</span>
        </h1>
        <button
          className={`bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition ${
            cartItems.length === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={cartItems.length === 0}
          onClick={() => setCheckoutVisible(true)}
        >
          Checkout ({cartItems.length} items)
        </button>
      </div>
    </div>
  );
}

export default AddToCart;
