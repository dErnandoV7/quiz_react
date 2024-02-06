import { useContext, useEffect } from "react";
import { QuizContext } from "../context/quiz";

import "./Question.css";

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestion];
  const options = currentQuestion.options;

  function selectOption(index) {
    const optionsEl = document.querySelectorAll(".option");

    optionsEl.forEach((option) => {
      option.classList.remove("select");
    });

    optionsEl[index].classList.add("select");
  }

  useEffect(() => {
    const optionsEl = document.querySelectorAll(".option");

    optionsEl.forEach((option) => {
      option.classList.remove("select");
    });
  }, [quizState.currentQuestion]);

  return (
    <div id="question">
      <p>
        Pergunta de {quizState.currentQuestion + 1} a{" "}
        {quizState.questions.length}
      </p>
      <h1>{currentQuestion.question}</h1>

      <div className="options-container">
        <div id="options-container">
          {options.map((option, index) => (
            <p
              className="option"
              key={index}
              onClick={() => {
                dispatch({ type: "SELECT_RESPONSE", value: option });
                selectOption(index);
              }}
            >
              {option}
            </p>
          ))}
        </div>
      </div>
      <button onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>
        Continuar
      </button>
    </div>
  );
};

export default Question;
