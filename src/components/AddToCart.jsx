import React, { useEffect, useState } from "react";
import Home from "../assets/home.svg";
import { Link } from "react-router-dom";

function AddToCart(props) {
  // Retrieve cart items from localStorage or initialize as an empty array
  let cartItems = JSON.parse(localStorage.getItem(props.user)) || [];
  const user = props.user;
  let price = [];
  let total;
  const [check, setCheck] = useState(false);
  const numFy = (num) => {
    let numOnly = num.replace(/[^\d]/g, "");
    return Number(numOnly);
  };
  cartItems.forEach((cartItem) => {
    let num = numFy(cartItem.price);
    price.push(num);
    if (price.length > 0) {
      total = price.reduce((a, b) => a + b, 0);
    }
  });

  const checkOut = () => {
    let checkOutBox = document.querySelector("#checkOut");
    if (check) {
      checkOutBox.classList.remove("invisible");
      checkOutBox.classList.add("visible");
      setCheck(!check);
    }
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
      <h1 className="text-center font-bold">
        Total Price :Rs .<span className="text-red-600">{total}</span>
      </h1>

      <div className=" text-center w-fit bg-green-400 mx-auto p-2 rounded-xl cursor-pointer hover:bg-green-500 ">
        Checkout
        <span className="ml-2 text-sm font-medium text-gray-700">
          ({cartItems.length} items)
        </span>
      </div>
      <div
        id="checkOut"
        className="fixed top-10 w-full flex justify-center invisible"
        onClick={checkOut}
      >
        <span className="flex flex-col justify-center items-center border border-black p-4 w-fit bg-green-800">
          <h1>Proceed To Checkout</h1>
          <h1>{cartItems.length} Items</h1>
          <h2>{total}</h2>
          <button>Done</button>
        </span>
      </div>
    </div>
  );
}

export default AddToCart;
