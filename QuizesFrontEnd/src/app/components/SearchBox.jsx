"use client";

import {useState} from "react";
import FetchQuiz from "../CustomHoks/FetchQuiz";
import'../page.module.css'

const SearchBox= () => {
  const [inputValue, setInputValue] = useState("");
  const [topic, setTopic] = useState("");
  const [fetched, setFetched] = useState (false)
  const URL = `http://localhost:8888/quiz/${topic}`;

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit=()=>{
    setTopic(inputValue)
    setFetched(true)
  }


  FetchQuiz(URL, fetched, topic);


  return (
    <div className="searchBox">
      <input 
       type="text"
       onChange={(e)=>handleInputChange(e)}
       placeholder="Enter Topic Of Quiz"
       value={inputValue} 
       />
      <button onClick={()=>handleSubmit()}>Click</button>
    </div>
  );
};

export default SearchBox;
