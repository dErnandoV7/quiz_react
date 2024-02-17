import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import Category from "../img/category.svg";

import "./PickCategory.css";

const PickCategory = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  const chooseCategoryAndReorderQuestion = (category) => {
    dispatch({ type: "START_GAME", payload: { category } });
    dispatch({ type: "REORDER_QUESTIONS" });
  };

  return (
    <div id="category">
      <h2>Escolha uma categoria</h2>
      <p>As perguntas serão referentes a uma das linguagens abaixo:</p>
      <div className="category-options">
        {quizState.questions.map((question) => (
          <button
            key={question.category}
            onClick={() => chooseCategoryAndReorderQuestion(question.category)}
          >
            {question.category}
          </button>
        ))}
      </div>
      <img src={Category} alt="categorias" />
    </div>
  );
};

export default PickCategory;
