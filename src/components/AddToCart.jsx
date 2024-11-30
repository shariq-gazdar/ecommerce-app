import React, { useEffect } from "react";
import Home from "../assets/home.svg";
import { Link } from "react-router-dom";

function AddToCart(props) {
  // Retrieve cart items from localStorage or initialize as an empty array
  let cartItems = JSON.parse(localStorage.getItem(props.user)) || [];
  const user = props.user;
  let price = [];
  cartItems.forEach((cartItem) => {
    price = cartItem.price;
  });

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
              className="border border-gray-400 p-4 rounded-lg shadow-md mb-4"
            >
              <h2 className="font-bold text-lg">{cartItem.name}</h2>
              <p>{cartItem.description}</p>
              <p className="text-gray-700">Price: Rs.{cartItem.price}</p>
            </div>
          ))
        ) : (
          <h2 className="text-center text-gray-500">Your cart is empty!</h2>
        )}
      </div>
      <h1 className="text-center font-bold">Total Price :{price[5]}</h1>
    </div>
  );
}

export default AddToCart;
