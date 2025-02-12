import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Exit from "../assets/exit.svg";

function Dashboard() {
  const [allUsers, setAllUsers] = useState([]);
  const [user, setUser] = useState(true);
  const [order, setOrder] = useState(false);
  const [orderItems, setOrderItems] = useState([]);
  const [cartItems, setCartItems] = useState(() => {
    const storedItems = localStorage.getItem("cartItems");
    return storedItems ? JSON.parse(storedItems) : [];
  });

  // Fetch users from localStorage
  const getLocalStorage = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    setAllUsers(users);
    console.log("Loaded users:", users);
  };

  // Remove an item from the users list
  const removeItem = (index) => {
    const updatedUsers = [...allUsers];
    updatedUsers.splice(index, 1);
    setAllUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };
  const localOrder = () => {
    const someOrder = localStorage.getItem("orders") || [];
    setOrderItems(someOrder);
    console.log(orderItems);
  };

  // Fetch data when the component mounts
  useEffect(() => {
    getLocalStorage();
  }, []);

  useEffect(() => {
    localOrder();
  });
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-6">
      {/* Header */}
      <div className="w-full flex justify-between px-10 items-center">
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold">Dashboard</h1>
          <button
            onClick={() => {
              setUser(true);
            }}
          >
            Users
          </button>
          <button
            onClick={() => {
              setUser(false);
            }}
          >
            Orders
          </button>
        </div>
        <Link to="/login">
          <img
            src={Exit}
            alt="Exit"
            className="cursor-pointer"
            title="Logout"
          />
        </Link>
      </div>

      {/* Users List */}
      {user && (
        <div className="flex flex-col gap-y-5 w-full max-w-2xl mt-6">
          {allUsers.length > 0 ? (
            allUsers.map((user, index) => (
              <div
                key={index}
                className="flex items-center justify-between border rounded-lg border-gray-300 py-4 px-4"
              >
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">
                    {user.name}
                  </h2>
                  <p className="text-gray-600">{user.email}</p>
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
            <h2 className="text-center text-gray-500 py-10">No users found!</h2>
          )}
        </div>
      )}
      {order && (
        <div>
          {orderItems.map((orderItem) => {
            <div key={orderItem.name}>
              <h2>{orderItem.name}</h2>
              <h3>{orderItem.price}</h3>
              <p>{orderItem.description}</p>
              <p>{orderItem.quantity}</p>
              <hr />
            </div>;
          })}
        </div>
      )}
    </div>
  );
}

export default Dashboard;
