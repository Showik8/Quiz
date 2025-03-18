"use client"

import "@/app/styles/suggestions.css";
import { useState } from "react";


const SuggestedCard = ({ name, img, Quizes, setChoosedTopic }) => {
  const [activated, setActivated] = useState(false)



  return (
    <div className={activated ? "suggestedCardActive" : "suggestedCard"}>
      {activated  ? null : <img src={img} alt={name} />}
      <h3>{name}</h3>

      <div className={ activated? "listedQuizActive" :"listedQuiz"}>
        {!activated && Quizes.map((el, ind) => {
          return <span key={ind}>{el}</span>;
        })}


         {activated && Quizes.map((el, ind) => {
          return (
            <div key={ind}>
              <span key={ind}>{el}</span>
              <button>Start</button>
            </div>
          );
        })}


        </div>
      <button onClick={() => setActivated(!activated)}>Try Yourself</button>
    </div>
  );
};

export default SuggestedCard;
