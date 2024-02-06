import React from "react";

import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import "./Question.css";

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestion];
  const options = currentQuestion.options;

  return (
    <div id="question">
      <p>
        Pergunta de {quizState.currentQuestion + 1} a {quizState.questions.length}
      </p>
      <h1>{currentQuestion.question}</h1>
      {/* <div id="options-container">
        {options.map((option, index) => (
          <p key={index}>{option}</p>
        ))}
      </div> */}
      <div className="options-container">
        <p>Opções</p>
      </div>
      <button onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>
        Continuar
      </button>
    </div>
  );
};

export default Question;
