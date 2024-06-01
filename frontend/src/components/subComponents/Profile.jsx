import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InfoProfile from "./suubSubComponents/InfoProfile";

const Profile = () => {
  return (
    <div>
      <div>
        <ul className="flex gap-2">
          <li className="fle x border rounded border-black p-2 m-2">
            <a href="#">Info</a>
          </li>
          <li className="flex border rounded border-black p-2 m-2">
            <a href="#">Achivements</a>
          </li>
          <li className="flex border rounded border-black p-2 m-2">
            <a href="#">Img Gallery</a>
          </li>
          <li className="flex border rounded border-black p-2 m-2">
            <a href="#">More</a>
          </li>
          <li className="flex border rounded border-black p-2 m-2">
            <a href="#">More</a>
          </li>
          <li className="flex border rounded border-black p-2 m-2">
            <a href="#">More</a>
          </li>
          <li className="flex border rounded border-black p-2 m-2">
            <a href="#">More</a>
          </li>
        </ul>
        <div></div>
        <InfoProfile />
      </div>
    </div>
  );
};

export default Profile;
