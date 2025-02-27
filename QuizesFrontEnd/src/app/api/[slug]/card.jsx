"use client"

import "@/app/styles/api.css"

const Card = ({name}) => {
  return (
      <div className="slugCard">
        <h1>{name}</h1>
        <button>Start Quiz</button>
      </div>
  );
};

export default Card 