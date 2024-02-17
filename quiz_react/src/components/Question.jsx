import { useContext, useEffect } from "react";
import { QuizContext } from "../context/quiz";

import "./Question.css";

import Option from "./Option";

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestion];
  const options = currentQuestion.options;

  function selectOption(option) {
    dispatch({
      type: "CHECK_ANSWER",
      payload: { answer: currentQuestion.answer, option },
    });
  }
  return (
    <div id="question">
      <p>
        Pergunta de {quizState.currentQuestion + 1} a{" "}
        {quizState.questions.length}
      </p>
      <h1>{currentQuestion.question}</h1>

      <span>Será considerada somente a sua primeira seleção</span>

      <div className="options-container">
        <div id="options-container">
          {options.map((option, index) => (
            <Option
              key={option}
              option={option}
              answer={quizState.answerSelected}
              selectOption={selectOption}
              hide={quizState.optionToHide === option ? "hide" : null}
            />
          ))}
        </div>
      </div>

      {quizState.help === "tip" && currentQuestion.tip && (
        <p>Dica: {currentQuestion.tip}</p>
      )}
      {!quizState.answerSelected && !quizState.help && (
        <button
          onClick={() => {
            dispatch({ type: "REMOVE_OPTION" });
          }}
        >
          Excluir opção
        </button>
      )}

      <div>
        {!quizState.answerSelected &&
          currentQuestion.tip &&
          !quizState.help && (
            <button onClick={() => dispatch({ type: "TIP" })}>Dica</button>
          )}
      </div>

      {quizState.answerSelected && (
        <button onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>
          Continuar
        </button>
      )}
    </div>
  );
};

export default Question;
