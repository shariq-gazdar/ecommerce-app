import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import exit from "../assets/exit.svg";
const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [orderItems, setOrderItems] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchUsers();
    fetchOrders();
  }, []);

  // Function to fetch users from localStorage
  const fetchUsers = () => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  };

  // Function to fetch orders from localStorage
  const fetchOrders = () => {
    let ordersMap = new Map();

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith("orders_")) {
        const email = key.replace("orders_", "");
        const userOrders = JSON.parse(localStorage.getItem(key)) || [];

        if (!ordersMap.has(email)) {
          ordersMap.set(email, []);
        }

        userOrders.forEach((order) => {
          ordersMap.get(email).push(order);
        });
      }
    }

    setOrderItems(Array.from(ordersMap.entries()));
  };

  // Function to delete a specific user
  const deleteUser = (email) => {
    const updatedUsers = users.filter((user) => user.email !== email);
    localStorage.setItem("users", JSON.stringify(updatedUsers)); // Update users in localStorage
    localStorage.removeItem(`orders_${email}`); // Remove orders of the deleted user
    fetchUsers();
    fetchOrders();
  };

  // Function to delete a specific order
  const deleteOrder = (email, orderIndex) => {
    const key = `orders_${email}`;
    const userOrders = JSON.parse(localStorage.getItem(key)) || [];

    userOrders.splice(orderIndex, 1); // Remove the selected order

    if (userOrders.length > 0) {
      localStorage.setItem(key, JSON.stringify(userOrders)); // Update storage
    } else {
      localStorage.removeItem(key); // Remove user if no orders left
    }

    fetchOrders(); // Refresh UI
  };

  return (
    <div className="p-6">
      <img
        src={exit}
        alt=""
        className="float-right cursor-pointer"
        onClick={() => {
          navigate("/login");
        }}
      />
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      {/* Users Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Users</h2>
        {users.length > 0 ? (
          users.map((user, index) => (
            <div
              key={index}
              className="border p-4 mb-2 rounded-lg flex justify-between items-center"
            >
              <div>
                <p className="font-medium text-gray-700">{user.email}</p>
                <p className="text-gray-500">Name: {user.name}</p>
              </div>
              <button
                onClick={() => deleteUser(user.email)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Delete User
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No users found.</p>
        )}
      </div>

      {/* Orders Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Orders</h2>
        {orderItems.length > 0 ? (
          orderItems.map(([email, orders], index) => (
            <div key={index} className="border-b py-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Order from: {email}
              </h2>
              {orders.map((order, orderIndex) => (
                <div key={orderIndex} className="ml-4 border-b pb-2">
                  <p className="text-gray-500 text-sm">
                    Date: {new Date(order.date).toLocaleString()}
                  </p>
                  {order.cartItems.map((item, i) => (
                    <div key={i} className="ml-4">
                      <h3 className="text-gray-700">
                        {item.name} (x{item.quantity})
                      </h3>
                      <p className="text-gray-600">
                        Price: Rs.{item.price} each
                      </p>
                    </div>
                  ))}
                  {/* Delete Order Button */}
                  <button
                    onClick={() => deleteOrder(email, orderIndex)}
                    className="mt-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete Order
                  </button>
                </div>
              ))}
            </div>
          ))
        ) : (
          <h2 className="text-center text-gray-500 py-10">No orders found!</h2>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
