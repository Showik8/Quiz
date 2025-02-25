"use client"

import "@/app/styles/suggestions.css";

import { useRouter } from "next/navigation";

const SuggestedCard = ({ name, img,Quizes }) => {
    const router = useRouter();

  const HandleClick = (path) => {
    router.push(`/api/${path.toLowerCase()}`);
  }

 return (
   <div className="suggestedCard">
     <img src={img} alt={name} />
     <h3>{name}</h3>
     <div>
       {Quizes.map((el, ind) => {
         return <span key={ind}>{el}</span>;
       })}
     </div>
     <button onClick={()=>HandleClick(name)} >Try Yourself</button>
   </div>
 );
};

export default SuggestedCard;
