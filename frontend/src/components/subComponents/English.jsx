import React, { useState } from "react";
import speach2 from "./images/English/part_of_speach.png";
import sentance from "./images/English/sentance.jpg";
import tenses from "./images/English/tenses.png";
import agreement from "./images/English/agreement.png";
import modifiers from "./images/English/Modifiers.png";
import voice from "./images/English/voice.png";
import types from "./images/English/types.png";
import punctuations from "./images/English/punctuation.png";
import Speach1 from "./sideBarComponenets/Speach1";
import Voice from "./sideBarComponenets/Voice1";
import SentenceStructure from "./sideBarComponenets/SentenceStructure";
import Tenses from "./sideBarComponenets/Tenses";
import Agreement from "./sideBarComponenets/Agreement";
import Modifiers from "./sideBarComponenets/Modifiers";
import SentenceType from "./sideBarComponenets/SentenceTypes";
import Punctuation from "./sideBarComponenets/Punctuation";

const English = () => {
  const [activeSideMenu, setActiveSideMenu] = useState("");
  const renderSideContent = () => {
    switch (activeSideMenu) {
      case "Speach":
        return <Speach1 />;
      case "SentenceStructure":
        return <SentenceStructure />;
      case "Tenses":
        return <Tenses />;
      case "Agreement":
        return <Agreement />;
      case "Modifiers":
        return <Modifiers />;
      case "Voice1":
        return <Voice />;
      case "SentenceType":
        return <SentenceType />;
      case "Punctuation":
        return <Punctuation />;
      default:
        return <Speach1 />;
    }
  };
  renderSideContent();
  return (
    <div className=" flex justify-center items-center ">
      <div>
        <div className="flex gap-2">
          <div className="border border-gradient bg-gradient-to-r from-blue-500 to-green-500 rounded-lg w-44 h-36">
            <button
              className="bg-black z-2"
              onClick={() => {
                setActiveSideMenu("Speach1");
              }}
            >
              <img
                src={speach2}
                // src="./images/English/part_of_speech.png"
                alt="Parts of Speech"
                className="max-w-full h-auto"
              />
            </button>
          </div>
          <div className="border border-gradient bg-gradient-to-r from-blue-500 to-green-500 rounded-lg w-44 h-36">
            <button
              className="bg-black z-2"
              onClick={() => {
                setActiveSideMenu("SentenceStructure");
              }}
            >
              <img
                src={sentance}
                // src="./images/English/part_of_speech.png"
                alt="sentance"
                className="max-w-full h-auto"
              />
            </button>
            Sentence Structure
          </div>
          <div className="border border-gradient bg-gradient-to-r from-blue-500 to-green-500 rounded-lg w-44 h-36">
            <button
              className="bg-black z-2"
              onClick={() => {
                setActiveSideMenu("Tenses");
              }}
            >
              <img
                src={tenses}
                // src="./images/English/part_of_speech.png"
                alt="sentance"
                className="max-w-full h-auto"
              />
            </button>
            Tenses
          </div>
          <div className="border border-gradient bg-gradient-to-r from-blue-500 to-green-500 rounded-lg w-44 h-36">
            <button
              className="bg-black z-2"
              onClick={() => {
                setActiveSideMenu("Agreement");
              }}
            >
              <img
                src={agreement}
                // src="./images/English/part_of_speech.png"
                alt="agreement"
                className="max-w-full h-auto"
              />
            </button>
            Agreement
          </div>
        </div>
        <div className="flex gap-2 mt-2">
          <div className="border border-gradient bg-gradient-to-r from-blue-500 to-green-500 rounded-lg w-44 h-36">
            <button
              className="bg-black z-2"
              onClick={() => {
                setActiveSideMenu("Modifiers");
              }}
            >
              <img
                src={modifiers}
                // src="./images/English/part_of_speech.png"
                alt="modifiers"
                className="max-w-full h-auto"
              />
            </button>
            Modifiers
          </div>
          <div className="border border-gradient bg-gradient-to-r from-blue-500 to-green-500 rounded-lg w-44 h-36">
            <button
              className="bg-black z-2"
              onClick={() => {
                setActiveSideMenu("Voice1");
              }}
            >
              <img
                src={voice}
                // src="./images/English/part_of_speech.png"
                alt="voice"
                className="max-w-full h-auto"
              />
            </button>
            Voice
          </div>
          <div className="border border-gradient bg-gradient-to-r from-blue-500 to-green-500 rounded-lg w-44 h-36">
            <button
              className="bg-black z-2"
              onClick={() => {
                setActiveSideMenu("SentenceType");
              }}
            >
              <img
                src={types}
                // src="./images/English/part_of_speech.png"
                alt="types"
                className="max-w-full h-auto"
              />
            </button>
            Sentence Types
          </div>
          <div className="border border-gradient bg-gradient-to-r from-blue-500 to-green-500 rounded-lg w-44 h-36">
            <button
              className="bg-black z-2"
              onClick={() => {
                setActiveSideMenu("Punctuation");
              }}
            >
              <img
                src={punctuations}
                // src="./images/English/part_of_speech.png"
                alt="punctuation"
                className="max-w-full h-auto"
              />
            </button>
            Punctuation
          </div>
        </div>
      </div>
    </div>
  );
};

export default English;
