"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import SearchBox from "./components/SearchBox";
import Header from "./components/Header";
import Suggestions from "./components/Suggestions";
import StartQuiz from "./components/StartQuiz";
import "./page.module.css";

export default function Home() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      <Header />
      <main>
        {pathname === "/" && (
          <>
            <span> Search Quiz</span>
            <SearchBox />
            <Suggestions />
          </>
        )}
      </main>
    </>
  );
}
