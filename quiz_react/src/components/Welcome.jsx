import Quiz from "../img/quiz.svg";

import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import "./Welcome.css";

const Wellcome = () => {
  const quizState = useContext(QuizContext)
  
  return (
    <div id="welcome">
      <h2>Seja bem-vindo</h2>
      <p>Clique no botão abaixo para começar:</p>
      <button>Iniciar</button>
      <img src={Quiz} alt="Inicio do Quiz" />
    </div>
  );
};

export default Wellcome;
