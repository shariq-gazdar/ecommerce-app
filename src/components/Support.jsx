import React from "react";
import Home from "../assets/home.svg";
import { Link, useNavigate } from "react-router-dom";

function Support({ user }) {
  return (
    <div className=" bg-white">
      {/* Home Icon */}
      <div className="absolute top-4 right-4">
        <Link to="/">
          <img src={Home} alt="Home" className="w-8 h-8" />
        </Link>
      </div>

      <div className=" mt-10">
        <div className="upper p-10 shadow-lg flex flex-col gap-y-10 items-center">
          <h1 className="font-bold text-3xl">What Can We Help You With </h1>
          <div className="flex justify-center">
            <input type="text" className="border-2 w-96 rounded-l-lg p-2" />
            <button className="bg-green-500 p-2 text-white font-semibold rounded-r-lg">
              {" "}
              Search
            </button>
          </div>
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam hic
            consequatur{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Support;
