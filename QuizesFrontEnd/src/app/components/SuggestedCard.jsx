import "@/app/styles/suggestions.css";

const SuggestedCard = ({ name, img,Quizes }) => {
 return (
   <div className="suggestedCard">
     <img src={img} alt={name} />
     <h3>{name}</h3>
    {Quizes.map((el,ind)=>{
      return  <span key={ind}>{el}</span>
    })}
   </div>
 );
};

export default SuggestedCard;
