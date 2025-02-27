"use client";
import { useEffect, useState } from "react";

const FetchQuiz = (URL, fetched, topic) => {
  const [quizData, setQuizData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      try {
        if (fetched) {
          const response = await fetch(URL, { signal: abortController.signal });
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          setQuizData(data);
          sessionStorage.setItem(topic, JSON.stringify(data));
        }
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
      } finally {
        setLoading(false);
      }
    };
    const savedQuizData = sessionStorage.getItem(topic);
    if (savedQuizData) {
      setQuizData(JSON.parse(savedQuizData));
      setLoading(false);
    } else {
      fetchData();
    }

    return () => {
      abortController.abort();
    };
  }, [URL]);

  return { quizData, loading, error };
};

export default FetchQuiz;
