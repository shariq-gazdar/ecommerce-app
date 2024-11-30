import React from "react";
import Home from "../assets/home.svg";
import { Link } from "react-router-dom";
function AddToCart(props) {
  const getAllItems = () => {};
  return (
    <div>
      <div className="w-full h-full flex items-center justify-between px-10">
        <h1 className="text-center font-bold">{props.user}'s Cart</h1>
        <Link to="/">
          <img src={Home} alt="" />
        </Link>
      </div>
    </div>
  );
}

export default AddToCart;
