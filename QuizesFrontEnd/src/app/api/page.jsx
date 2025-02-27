"use client"

import { useRouter } from "next/navigation";
import StartQuiz from "../components/StartQuiz";

 const SlugPage = () => {
  const router = useRouter();
  const  slug  = router.query;



return (
  <>
    {slug ? (
      <div>
        <h1>Slug Page</h1>
        <p>Slug: {slug}</p>
        <p>ჭოო</p>
      </div>
    ) : (
      <StartQuiz />
    )}
  </>
); 
}

export default SlugPage
