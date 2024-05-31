import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/mainimg.jpg"; // Adjust the path accordingly

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/register",
        { username, email, password }
      );
      localStorage.setItem("token", response.data.token);
      alert("Registered successful!");
      navigate("/");
    } catch (error) {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <img
        src={backgroundImage}
        alt="Description of the image"
        width="300"
        height="200"
        className=" bg-opacity-50 bg-black absolute inset-0 top-0 left-0 w-full h-full object-cover "
      />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="absolute inset-0 flex items-center justify-center"></div>
      <div className=" bg-transperant text-white border rounded border-white p-4 z-10 bg-black bg-opacity-40">
        <h2 className="text-lg font-semibold">
          Complete the registration form, please.
        </h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label className=" ">Username:</label>
            <input
              className="border text-black rounded border-black m-3 p-1"
              type="text"
              required
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div>
            <label className="">Password: </label>
            <input
              className="border text-black rounded border-black mt-0.5 m-3 p-1"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="">Email: </label>
            <input
              className=" text-black border rounded border-black mt-0.5 ml-10 m-3 p-1"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <div>
            <p className="ml-10 mb-5">
              Already have an account?
              <a href="/" className="ml-2 font-bold text-sky-300">
                Sign in
              </a>
            </p>
            <button
              type="submit"
              className="border  hover:bg-sky-400 rounded w-20 h-8"
            >
              Register
            </button>
            <button type="submit" className="  text-red-500 ml-20 w-40 h-8">
              Forgotten password?
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
