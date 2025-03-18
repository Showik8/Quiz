"use client";

import {useState} from "react";
import FetchQuiz from "../CustomHoks/FetchQuiz";
import searchIcon from "../assets/svgs/searchIcon.svg";
import'../styles/searchBox.css'

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
    setInputValue("")
  }


  FetchQuiz(URL, fetched, topic);


  return (
    <div onClick={() => handleSubmit()} className="searchBox">
      <img src={searchIcon.src} alt="" />
      <input
        type="text"
        onChange={(e) => handleInputChange(e)}
        placeholder="Enter Topic Of Quiz"
        value={inputValue}
      />
    </div>
  );
};

export default SearchBox;
