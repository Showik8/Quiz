"use client";

import SearchBox from "./components/SearchBox";
import Header from "./components/Header";
import Suggestions from "./components/Suggestions";
import "./page.module.css";

export default function Home() {

  return (
    <>
      <Header />
      <main>
        <h1>Quizzes</h1>
        <SearchBox />
        <Suggestions />
      </main>
    </>
  );
}
