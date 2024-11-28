import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login(props) {
  const [loginMatch, setLoginMatch] = useState(false);
  const navigate = useNavigate(); // Using useNavigate hook

  const handleSubmit = (e) => {
    e.preventDefault();

    let inpEmail = document.getElementById("email").value;
    let inpPass = document.getElementById("password").value;
    let statusLine = document.getElementById("statusLine");

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    let userFound = false;

    // Check each user to see if email and password match
    existingUsers.forEach((user) => {
      if (user.email === inpEmail && user.password === inpPass) {
        userFound = true;
        setLoginMatch(true);
        props.setLogin(true);
        statusLine.classList.remove("invisible", "text-red-500");
        statusLine.classList.add("text-green-500");
        statusLine.innerText = "Login Success";
        navigate("/");
        props.setCurrentUser(inpEmail);
      }
    });

    // If no match is found
    if (!userFound) {
      setLoginMatch(false);
      props.setLogin(false);
      statusLine.classList.remove("invisible", "text-green-500");
      statusLine.classList.add("text-red-500");
      statusLine.innerText = "Invalid email or password";
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <div className="bg-white shadow-xl rounded-lg p-8 w-96">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Login
        </h1>

        <form className="flex flex-col" onSubmit={handleSubmit}>
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
          <h1 id="statusLine" className="text-center py-2 invisible">
            Status Line
          </h1>
          <h1 className="text-center pb-1">
            Don't Have an Account?{" "}
            <span className="text-green-400">
              <Link to="/signup"> SignUp</Link>
            </span>
          </h1>
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-3 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
