import React, { useState, useEffect } from "react";
import Home from "../assets/home.svg";
import { Link } from "react-router-dom";

function AddToCart({ user }) {
  const [checkoutVisible, setCheckoutVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [userDetails, setUserDetails] = useState({ address: "", card: "" });
  const [userFormVisible, setUserFormVisible] = useState(false);
  const [formData, setFormData] = useState({ address: "", card: "" });

  // Load cart and user details from localStorage
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem(user)) || [];
    setCartItems(storedItems);

    const savedUser = JSON.parse(localStorage.getItem(`user_${user}`));
    if (savedUser) {
      setUserDetails(savedUser);
    }
  }, [user]);

  // Converts price strings like "Rs.1,299.50" to a number
  const numFy = (num) => parseFloat(num.replace(/[^0-9.]/g, "")) || 0;

  // Calculate total price
  const total = cartItems.reduce(
    (acc, item) => acc + numFy(item.price) * item.quantity,
    0
  );

  // Remove item from cart
  const removeItem = (index) => {
    setCartItems((prevItems) => {
      const updatedCartItems = [...prevItems];

      if (updatedCartItems[index].quantity > 1) {
        updatedCartItems[index].quantity -= 1;
      } else {
        updatedCartItems.splice(index, 1);
      }

      localStorage.setItem(user, JSON.stringify(updatedCartItems));
      return updatedCartItems;
    });
  };

  // Handle checkout button click
  const handleCheckout = () => {
    const savedUser = JSON.parse(localStorage.getItem(`user_${user}`));
    if (!savedUser) {
      setUserFormVisible(true);
    } else {
      setCheckoutVisible(true);
    }
  };

  // Save user details and continue checkout
  const saveUserDetails = () => {
    if (!formData.address || !formData.card) {
      alert("Please fill in all details.");
      return;
    }
    localStorage.setItem(`user_${user}`, JSON.stringify(formData));
    setUserDetails(formData);
    setUserFormVisible(false);
    setCheckoutVisible(true);
  };

  // Confirm checkout
  const handleCheckoutConfirm = () => {
    const existingOrders =
      JSON.parse(localStorage.getItem(`orders_${user}`)) || [];
    const updatedOrders = [
      ...existingOrders,
      { cartItems, date: new Date().toISOString(), userDetails },
    ];
    localStorage.setItem(`orders_${user}`, JSON.stringify(updatedOrders));

    console.log("Order Placed:", updatedOrders);

    setCartItems([]);
    localStorage.removeItem(user);
    setCheckoutVisible(false);
  };

  return (
    <div className="min-h-svh bg-gray-100 flex flex-col items-center py-6">
      {/* User Details Form Modal */}
      {userFormVisible && (
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h1 className="text-lg font-bold mb-4">Enter Your Details</h1>
            <input
              type="text"
              placeholder="Address"
              className="w-full p-2 border rounded mb-2"
              value={formData.address}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, address: e.target.value }))
              }
            />
            <input
              type="text"
              placeholder="Credit Card Number"
              className="w-full p-2 border rounded mb-4"
              value={formData.card}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, card: e.target.value }))
              }
            />
            <div className="flex justify-center gap-4">
              <button
                className="bg-green-500 text-white px-4 py-2 rounded"
                onClick={saveUserDetails}
              >
                Save & Continue
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={() => setUserFormVisible(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Checkout Confirmation Modal */}
      {checkoutVisible && (
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white font-bold px-10 py-5 rounded-lg shadow-lg">
            <h1 className="text-lg">Confirm Checkout</h1>
            <h1 className="text-center text-red-600">
              Total Bill: Rs.{total.toFixed(2)}
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

      {/* Cart Header */}
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
                  {cartItem.name} (x{cartItem.quantity})
                </h2>
                <p className="text-gray-600">{cartItem.description}</p>
                <p className="text-gray-700 font-medium">
                  Price: Rs.{cartItem.price} each
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

      {/* Checkout Button */}
      <div className="mt-6 w-full max-w-4xl flex justify-between items-center px-4">
        <h1 className="text-lg font-bold text-gray-800">
          Total Price:{" "}
          <span className="text-red-600">Rs.{total.toFixed(2)}</span>
        </h1>
        <button
          className={`bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition ${
            cartItems.length === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={cartItems.length === 0}
          onClick={handleCheckout}
        >
          Checkout ({cartItems.reduce((acc, item) => acc + item.quantity, 0)}{" "}
          items)
        </button>
      </div>
    </div>
  );
}

export default AddToCart;
