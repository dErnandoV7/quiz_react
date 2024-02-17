import React from "react";

import Img from "../img/welldone.svg";

import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import "./Gameover.css";

const Gameover = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="gameover">
      <h2>Fim de jogo!</h2>
      <p>Pontuação: {quizState.score}</p>
      <p>Você acertou {quizState.score} de {quizState.questions.length} perguntas.</p>
      <img src={Img} alt="Fim do Quiz" />
      <button onClick={() => dispatch({type: "RESET"})}>Reiniciar</button>
    </div>
  );
};

export default Gameover;
