"use client"
import FetchQuiz from "../CustomHoks/FetchQuiz";

import '../styles/startQuiz.css'

const StartQuiz = ({topic,data}) =>{
    const URL = `http://localhost:8888/${topic}`;

    const { quizData, loading, error } = FetchQuiz(URL,true,topic)

  


console.log(quizData);

    return (
      <div className="quizStart">
        <span>{topic}</span>

        <h2>Question it is</h2>

        <div className="questionButtons">
          <button>Answer 1</button>
          <button>Answer 1</button>
          <button>Answer 1</button>
          <button>Answer 1</button>
        </div>

        <div className="questionHandler">
          <button>Previous</button>
          <button>Next</button>
        </div>
      </div>
    );
}

export default StartQuiz