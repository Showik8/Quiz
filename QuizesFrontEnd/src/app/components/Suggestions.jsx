import { useEffect, useMemo, useState } from "react";
import FetchQuiz from "../CustomHoks/FetchQuiz"
import StartQuiz from "./StartQuiz";
import SuggestedCard from "./SuggestedCard";

import "@/app/styles/suggestions.css"


const Suggestions = () => {
  let fetched = true;
  let topic = "Layout"
  const URL = "http://localhost:8888";

  const [choosedTopic, setChoosedTopic] = useState("")

  FetchQuiz(URL, fetched, topic);


   const data = useMemo(() => {
     let data = null;
     const savedData = sessionStorage.getItem(topic) || null;
     savedData ? (data = JSON.parse(savedData)) : null;
     return data;
   }, [topic]);

  

    if(data && !choosedTopic){
    return (
      <div className="suggestions">
        <h4>Suggested Quizes</h4>
        <div className="suggestedCards">
          {data.map((el, index) => {
            return (
              <SuggestedCard
                setChoosedTopic={setChoosedTopic}
                name={el.name}
                img={el.img}
                key={index}
                Quizes={el.Quizes}
              />
            );
          })}
        </div>
      </div>
    )}else{
      return (
        <div>
          <StartQuiz data={data} topic={choosedTopic} />
        </div>
      );
    }
}

export default Suggestions