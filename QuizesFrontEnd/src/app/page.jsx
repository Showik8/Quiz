"use client"

import SearchBox from "./components/SearchBox"
import Header from './components/Header'
import Suggestions from './components/Suggestions'

import "./page.module.css"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <h2> Search Quiz</h2>
        <SearchBox />
      <Suggestions/>
      </main>
    </>
  );
   
  
  
}
