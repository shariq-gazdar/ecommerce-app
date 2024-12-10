import React, { useState } from "react";
import Home from "../assets/home.svg";
import { Link, useNavigate } from "react-router-dom";

function Profile(props) {
  const user = props.user;
  const navigate = useNavigate(); // Using useNavigate hook
  const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
  let cartItems = JSON.parse(localStorage.getItem(props.user)) || [];
  let cartNumber = cartItems.length;
  let name;
  existingUsers.forEach((users) => {
    if (user == users.email) {
      console.log(users);
      name = users.name;
    }
  });
  const signOut = () => {
    navigate("/login");
  };
  return (
    <div className="flex justify-center items-stretch gap-y-44 flex-col">
      <span className="ml-[95vw] p-2">
        <Link to="/">
          <img src={Home} alt="Home" />
        </Link>
      </span>
      <span className="w-svw flex justify-center">
        <span className="border p-3 border-gray-600 rounded-xl">
          <h1 className="text-center font-bold">User :{user}</h1>
          <h1 className="text-center font-bold">Name :{name}</h1>
          <h1 className="text-center font-bold">Items in Cart:{cartNumber}</h1>
          <button
            className="text-center w-full bg-red-500 rounded-xl p-2 text-white"
            onClick={signOut}
          >
            SignOut
          </button>
        </span>
      </span>
    </div>
  );
}

export default Profile;
