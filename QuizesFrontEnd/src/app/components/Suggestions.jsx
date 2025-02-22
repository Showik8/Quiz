import { useState } from "react";
import FetchQuiz from "../CustomHoks/FetchQuiz";
import SuggestedCard from "./SuggestedCard";

import "@/app/styles/suggestions.css"
const Suggestions = () => {
  let fetched = true;
  let topic = "Layout"
  const URL = "http://localhost:8888";

  FetchQuiz(URL, fetched, topic);

  const savedData= sessionStorage.getItem(topic)
  let data = ''

  savedData? data = JSON.parse(savedData): null;

  setTimeout(() => {
    sessionStorage.removeItem(topic)
  }, 5*1000 *60);

    return (
      <div className="suggestions">
        <h3>Suggested Quizes</h3>
        <div className="suggestedCards">
          {data?data.map((el,index)=>{
           return <SuggestedCard name={el.name} img={el.img} key={index} Quizes={el.Quizes} />;
          }):null}
        </div>
      </div>
    );
}

export default Suggestions