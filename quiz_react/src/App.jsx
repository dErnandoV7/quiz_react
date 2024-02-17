import "./App.css";

import { useContext, useEffect } from "react";
import { QuizContext } from "./context/quiz";

import Welcome from "./components/Welcome";
import Question from "./components/Question";
import Gameover from "./components/Gameover";
import PickCategory from "./components/PickCategory";

function App() {
  const [quizState, dispatch] = useContext(QuizContext);
  
  return (
    <div className="App">
      <h1>Quiz de programação</h1>
      {quizState.gameState === "Start" && <Welcome />}
      {quizState.gameState === "Category" && <PickCategory />}
      {quizState.gameState === "Playing" && <Question />}
      {quizState.gameState === "End" && <Gameover />}
    </div>
  );
}

export default App;
