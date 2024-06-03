import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InfoProfile from "./suubSubComponents/InfoProfile";

const JavaScript = () => {
  return (
    <div>
      <div>
        <ul className="flex gap-2">
          <li className="fle x border rounded border-black p-2 m-2">
            <button
              onClick={() => {
                setActiveMenu("Menu1");
              }}
            >
              JavaScript
            </button>
          </li>
          <li className="flex border rounded border-black p-2 m-2">
            <button
              onClick={() => {
                setActiveMenu("Menu2");
              }}
            >
              Achivements
            </button>
          </li>
          <li className="flex border rounded border-black p-2 m-2">
            <button
              onClick={() => {
                setActiveMenu("Menu3");
              }}
            >
              Img Gallery
            </button>
          </li>
          <li className="flex border rounded border-black p-2 m-2">
            <button
              onClick={() => {
                setActiveMenu("Menu4");
              }}
            >
              Img Gallery
            </button>
          </li>
          <li className="flex border rounded border-black p-2 m-2">
            <button
              onClick={() => {
                setActiveMenu("Menu5");
              }}
            >
              Img Gallery
            </button>
          </li>
          <li className="flex border rounded border-black p-2 m-2">
            <button
              onClick={() => {
                setActiveMenu("Menu6");
              }}
            >
              Img Gallery
            </button>
          </li>
          <li className="flex border rounded border-black p-2 m-2">
            <button
              onClick={() => {
                setActiveMenu("Menu7");
              }}
            >
              Img Gallery
            </button>
          </li>
        </ul>
        <div></div>
        <InfoProfile />
      </div>
    </div>
  );
};

export default JavaScript;
