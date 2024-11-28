import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Correct import
import { Link } from "react-router-dom";

function Signup(props) {
  const navigate = useNavigate(); // Initialize navigate function

  // Function to check if passwords match
  const checkPass = () => {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const statusLine = document.getElementById("statusLine");
    if (password === confirmPassword) {
      statusLine.classList.remove("invisible", "text-red-500");
      statusLine.classList.add("text-green-500");
      statusLine.innerText = "Passwords match";
      return true;
    } else {
      statusLine.classList.remove("invisible", "text-green-500");
      statusLine.classList.add("text-red-500");
      statusLine.innerText = "Passwords do not match";
      return false;
    }
  };

  // Function to check if the email is already used
  const alreadyUserCheck = () => {
    let inpEmail = document.getElementById("email").value;
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    return existingUsers.some((user) => user.email === inpEmail);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let emailStatus = document.getElementById("emailStatus");
    if (checkPass() && !alreadyUserCheck()) {
      const currentUser = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
      };
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
      existingUsers.push(currentUser);
      localStorage.setItem("users", JSON.stringify(existingUsers));
      console.log("User added successfully:", currentUser);

      navigate("/login");
    } else {
      console.log(
        "Passwords do not match or email is already in use. Fix the issue before submitting."
      );
      statusLine.classList.remove("invisible");
      statusLine.classList.add("text-red-500");
      statusLine.innerText =
        "Email is already in use. Fix the issue before submitting.";
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <div className="bg-white shadow-xl rounded-lg p-8 w-96">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Sign Up
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Join us to enjoy exclusive benefits and updates!
        </p>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="mb-4 p-3 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="mb-4 p-3 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="mb-4 p-3 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm your password"
            className="mb-4 p-3 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <h1 id="statusLine" className="text-center py-2 invisible">
            Status Line
          </h1>
          <h1 id="emailStatus" className="text-center invisible">
            Email Status
          </h1>
          <h1 className="text-center pb-1">
            Already Have An Account?{" "}
            <span className="text-green-400 ">
              <Link to="/login"> Login</Link>
            </span>
          </h1>
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-3 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
