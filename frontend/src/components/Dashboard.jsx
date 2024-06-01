// src/components/Dashboard.jsx
import React, { useState } from "react";
import axios from "axios";
import { Router, useNavigate } from "react-router-dom";
import Profile from "./subComponents/Profile";

const Dashboard = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-indigo-800">
      <div className="w-4/5 h-30 border border-white rounded">
        <h1 className="flex items-center justify-center text-white text-4xl">
          Welcome to the Dashboard
        </h1>
        <div className="border border-white rounded flex space-x-4">
          <div className="border border-white rounded">
            <ul className="border border-white rounded p-2">
              <li className="hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-sky-200 m-1 p-2 border border-white rounded">
                Profile
              </li>
              <li className="hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-sky-200 m-1 p-2 border border-white rounded">
                English Course
              </li>
              <li className="hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-sky-200 m-1 p-2 border border-white rounded">
                HTML Course
              </li>
              <li className="hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-sky-200 m-1 p-2 border border-white rounded">
                CSS Course
              </li>
              <li className="hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-sky-200 m-1 p-2 border border-white rounded">
                JavaScript Course
              </li>
              <li className="hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-sky-200 m-1 p-2 border border-white rounded">
                Tailwind Course
              </li>
              <li className="hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-sky-200 m-1 p-2 border border-white rounded">
                React Course
              </li>
              <li className="hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-sky-200 m-1 p-2 border border-white rounded">
                MongoDB Course
              </li>
              <li className="hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-sky-200 m-1 p-2 border border-white rounded">
                About
              </li>
              <li className="hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-sky-200 m-1 p-2 border border-white rounded">
                Settings
              </li>
            </ul>
          </div>
          <div className="border border-white rounded">
            <Profile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
