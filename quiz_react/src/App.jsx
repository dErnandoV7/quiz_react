import "./App.css";

import { useContext, useEffect } from "react";
import { QuizContext } from "./context/quiz";

import Welcome from "./components/Welcome";
import Question from "./components/Question";

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() => {
    dispatch({ type: "REORDER_QUESTIONS" });
  }, []);

  return (
    <div className="App">
      <h1>Quiz de programação</h1>
      {quizState.gameState === "Start" && <Welcome />}
      {quizState.gameState === "Playing" && <Question />}
    </div>
  );
}

export default App;
