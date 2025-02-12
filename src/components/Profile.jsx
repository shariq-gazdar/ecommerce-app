import React, { useState, useEffect } from "react";
import Home from "../assets/home.svg";
import { Link, useNavigate } from "react-router-dom";

function Profile({ user }) {
  const navigate = useNavigate();
  const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
  const cartItems = JSON.parse(localStorage.getItem(user)) || [];
  const cartNumber = cartItems.length;

  // Find user data
  const currentUser = existingUsers.find((u) => u.email === user);
  const name = currentUser ? currentUser.name : "Unknown";

  // Load existing address & card details
  const storedUserDetails =
    JSON.parse(localStorage.getItem(`user_${user}`)) || {};
  const [address, setAddress] = useState(storedUserDetails.address || "");
  const [card, setCard] = useState(storedUserDetails.card || "");

  // Save updated data
  const handleSave = () => {
    const updatedDetails = { address, card };
    localStorage.setItem(`user_${user}`, JSON.stringify(updatedDetails));
    alert("Profile updated successfully!");
  };

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

        {/* Address Input */}
        <div className="mb-4">
          <label className="block text-gray-600">Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Card Number Input */}
        <div className="mb-4">
          <label className="block text-gray-600">Card Number</label>
          <input
            type="text"
            value={card}
            onChange={(e) => setCard(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Save Changes Button */}
        <button
          className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition mb-4"
          onClick={handleSave}
        >
          Save Changes
        </button>

        {/* Sign Out Button */}
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
