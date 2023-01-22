import React, { useState } from "react";
import { Container } from "@mui/material";
import quiz from "./quiz";
import Quiz from "./components/Quiz";
import ModeSelect from "./components/ModeSelect";
import "./App.css";
import Results from "./components/Results";

function shuffle(original) {
  const array = [...original];
  let currentIndex = array.length;
  let randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function App() {
  const [questions, setQuestions] = useState([]);
  const [failedQuestions, setFailedQuestions] = useState([]);
  const [finished, setFinished] = useState(false);

  const render = () => {
    if (questions.length) {
      return finished ? (
        <Results
          questions={questions}
          failedQuestions={failedQuestions}
          onReplay={(q) => {
            setQuestions(q);
            setFinished(false);
          }}
        />
      ) : (
        <Quiz
          questions={questions}
          onFinish={(f) => {
            setFailedQuestions(f);
            setFinished(true);
          }}
        />
      );
    }
    return (
      <ModeSelect
        onSelect={(selectedMode) => {
          if (selectedMode === "all") {
            setQuestions(shuffle(quiz));
          } else {
            setQuestions(shuffle(quiz).slice(0, 100));
          }
        }}
      />
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <Container>{render()}</Container>
      </header>
    </div>
  );
}

export default App;
