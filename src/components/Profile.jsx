import React from "react";
import Home from "../assets/home.svg";
import { Link, useNavigate } from "react-router-dom";

function Profile({ user }) {
  const navigate = useNavigate();
  const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
  const cartItems = JSON.parse(localStorage.getItem(user)) || [];
  const cartNumber = cartItems.length;

  // Find the user's name based on their email
  const currentUser = existingUsers.find((u) => u.email === user);
  const name = currentUser ? currentUser.name : "Unknown";

  const signOut = () => {
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Home Icon */}
      <div className="absolute top-4 right-4">
        <Link to="/">
          <img src={Home} alt="Home" className="w-8 h-8" />
        </Link>
      </div>

      {/* Profile Card */}
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h1 className="text-lg font-semibold text-gray-700 text-center mb-4">
          User: <span className="font-normal">{user}</span>
        </h1>
        <h1 className="text-lg font-semibold text-gray-700 text-center mb-4">
          Name: <span className="font-normal">{name}</span>
        </h1>
        <h1 className="text-lg font-semibold text-gray-700 text-center mb-6">
          Items in Cart: <span className="font-normal">{cartNumber}</span>
        </h1>
        <button
          className="w-full py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          onClick={signOut}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default Profile;
