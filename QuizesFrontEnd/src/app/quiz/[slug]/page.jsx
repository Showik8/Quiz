"use client"
import React from "react"
import Card from './card'
import "@/app/styles/api.css"
export default function SlugPage({ params }) {
  const { slug } = React.use(params);

  const quizes = JSON.parse(sessionStorage.getItem("Layout"));
  let TopicOfQuiz = quizes.filter(quiz => quiz.name.toLocaleLowerCase() == slug)
  let quizzesName = new Array


  TopicOfQuiz.forEach((element) => {
    element.Quizes.forEach((name) => {
      quizzesName.push(name);
    });
  });


  if(quizes){
    return <section>
      <h2>Choose Quiz</h2>
      <div className="slugCards">
         {quizzesName.map((element, index) => (
         <Card key={index} name={element} />))}
      </div>
    </section>
  }

}
  