// src/components/Dashboard.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h2 className="font-thin text-orange-200">Dashboard</h2>
      <p className="text-orange-200 text-sm">Welcome to your dashboard!</p>
    </div>
  );
};

export default Dashboard;
