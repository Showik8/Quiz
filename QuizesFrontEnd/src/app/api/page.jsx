"use client"

import { useRouter } from "next/navigation";
import StartQuiz from "../components/StartQuiz";

export default function SlugPage() {
  const router = useRouter();
  const  slug  = router.query;

  console.log(slug)


return (
  <>
    {slug ? (
      <div>
        <h1>Slug Page</h1>
        <p>Slug: {slug}</p>
      </div>
    ) : (
      <StartQuiz />
    )}
  </>
); 
}
