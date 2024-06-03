import React from "react";
import speach from "./images/English/part_of_speach.png";
import sentance from "./images/English/sentance.jpg";
import tenses from "./images/English/tenses.png";
import agreement from "./images/English/agreement.png";
const English = () => {
  return (
    <div className=" flex justify-center items-center ">
      <div>
        <div className="flex gap-2">
          <div className="border border-gradient bg-gradient-to-r from-blue-500 to-green-500 rounded-lg w-44 h-36">
            <img
              src={speach}
              // src="./images/English/part_of_speech.png"
              alt="Parts of Speech"
              className="max-w-full h-auto"
            />
            Parts of Speech
          </div>
          <div className="border border-gradient bg-gradient-to-r from-blue-500 to-green-500 rounded-lg w-44 h-36">
            <img
              src={sentance}
              // src="./images/English/part_of_speech.png"
              alt="sentance"
              className="max-w-full h-auto"
            />
            Sentence Structure
          </div>
          <div className="border border-gradient bg-gradient-to-r from-blue-500 to-green-500 rounded-lg w-44 h-36">
            <img
              src={tenses}
              // src="./images/English/part_of_speech.png"
              alt="sentance"
              className="max-w-full h-auto"
            />
            Tenses
          </div>
          <div className="border border-gradient bg-gradient-to-r from-blue-500 to-green-500 rounded-lg w-44 h-36">
            <img
              src={agreement}
              // src="./images/English/part_of_speech.png"
              alt="agreement"
              className="max-w-full h-auto"
            />
            Agreement
          </div>
        </div>
        <div className="flex gap-2 mt-2">
          <div className="border border-gradient bg-gradient-to-r from-blue-500 to-green-500 rounded-lg w-44 h-36">
            Modifiers
          </div>
          <div className="border border-gradient bg-gradient-to-r from-blue-500 to-green-500 rounded-lg w-44 h-36">
            Voice
          </div>
          <div className="border border-gradient bg-gradient-to-r from-blue-500 to-green-500 rounded-lg w-44 h-36">
            Sentence Types
          </div>
          <div className="border border-gradient bg-gradient-to-r from-blue-500 to-green-500 rounded-lg w-44 h-36">
            Punctuation
          </div>
        </div>
      </div>
    </div>
  );
};

export default English;
