import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import "./Option.css";

const Option = ({ option, answer, selectOption, hide }) => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <>
      {hide !== "hide" && (
        <div
          className={`option ${
            quizState.answerSelected && answer === option ? "correct" : "wrong"
          }`}
          onClick={() => selectOption(option)}
        >
          <p>{option}</p>
        </div>
      )}
    </>
  );
};

export default Option;
