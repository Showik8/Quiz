"use client"
import React from "react"
import FetchQuiz from "../../CustomHoks/FetchQuiz";
import Card from './card'

import "@/app/styles/api.css"
export default function SlugPage({ params }) {
  const { slug } = React.use(params);
  const URL = `http://localhost:8888/api/${slug}`;

  const {quizData,loading,error} = FetchQuiz(URL,true,slug);
  

  if (loading) {
    return <div>Loading...</div>; 
  }

  if(quizData){return (
    <section>
      <h2>Choose Quiz</h2>
     <div className="slugCards">
        {quizData.map((element, index) => (
          <Card key={index} name={element.name} />
        ))}
      </div>
    </section>
  );
}}
