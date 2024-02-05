import Quiz from "../img/quiz.svg";

import { useContext } from "react";

import "./Welcome.css";
import { QuizContext } from "../context/quiz";

const Wellcome = () => {
  const data = useContext(QuizContext);
  console.log(data);
  
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
