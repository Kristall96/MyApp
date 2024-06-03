// src/components/Dashboard.jsx
import React, { useState } from "react";
import axios from "axios";
import { Router, useNavigate } from "react-router-dom";
import Profile from "./subComponents/Profile";
import React1 from "./subComponents/React";
import NodeJs from "./subComponents/NodeJs";
import JavaScript from "./subComponents/JavaScript";
import Html from "./subComponents/Html";
import Express from "./subComponents/Express";
import Css from "./subComponents/Css";
import English from "./subComponents/English";
import MongoDB from "./subComponents/MongoDB";
const Dashboard = () => {
  const [activeMenu, setActiveMenu] = useState("Profile");

  const renderContent = () => {
    switch (activeMenu) {
      case "Profile":
        return <Profile />;
      case "English":
        return <English />;
      case "Html":
        return <Html />;
      case "Css":
        return <Css />;
      case "NodeJs":
        return <NodeJs />;
      case "Express":
        return <Express />;
      case "JavaScript":
        return <JavaScript />;
      case "React1":
        return <React1 />;
      case "MongoDB":
        return <MongoDB />;
      default:
        return <Profile />;
    }
  };
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
                <button
                  onClick={() => {
                    setActiveMenu("Profile");
                  }}
                >
                  Profile
                </button>
              </li>
              <li className="hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-sky-200 m-1 p-2 border border-white rounded">
                <button
                  onClick={() => {
                    setActiveMenu("English");
                  }}
                >
                  English Course
                </button>
              </li>
              <li className="hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-sky-200 m-1 p-2 border border-white rounded">
                <button
                  onClick={() => {
                    setActiveMenu("Html");
                  }}
                >
                  HTML Course
                </button>
              </li>
              <li className="hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-sky-200 m-1 p-2 border border-white rounded">
                <button
                  onClick={() => {
                    setActiveMenu("Css");
                  }}
                >
                  CSS Course
                </button>
              </li>
              <li className="hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-sky-200 m-1 p-2 border border-white rounded">
                <button
                  onClick={() => {
                    setActiveMenu("JavaScript");
                  }}
                >
                  JavaScript Course
                </button>
              </li>
              <li className="hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-sky-200 m-1 p-2 border border-white rounded">
                <button
                  onClick={() => {
                    setActiveMenu("React1");
                  }}
                >
                  React Course
                </button>
              </li>
              <li className="hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-sky-200 m-1 p-2 border border-white rounded">
                <button
                  onClick={() => {
                    setActiveMenu("MongoDB");
                  }}
                >
                  MongoDB Course
                </button>
              </li>
              <li className="hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-sky-200 m-1 p-2 border border-white rounded">
                <button
                  onClick={() => {
                    setActiveMenu("NodeJs");
                  }}
                >
                  Node JS
                </button>
              </li>
              <li className="hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-sky-200 m-1 p-2 border border-white rounded">
                <button
                  onClick={() => {
                    setActiveMenu("Express");
                  }}
                >
                  Express
                </button>
              </li>
            </ul>
          </div>
          <div className="border border-white rounded">
            <h1>My Menu</h1>
            <Profile setActiveMenu={setActiveMenu} />
            <div className="content">{renderContent()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
