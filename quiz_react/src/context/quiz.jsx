import { createContext, useReducer } from "react";
import questions from "../data/questions";

const STAGES = ["Start", "Playing", "End"];

const initialState = {
  gameState: STAGES[0],
  questions,
  currentQuestion: 0,
  score: 0,
};

const quizReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_STATE":
      return {
        ...state,
        gameState: STAGES[1],
      };
    case "REORDER_QUESTIONS":
      const reorderedQuestions = questions.sort(() => {
        return Math.random() - 0.5;
      });
      return {
        ...state,
        questions: reorderedQuestions,
      };

    case "CHANGE_QUESTION":
      const nextQuestion = state.currentQuestion + 1;
      let endGame = false;

      if (!questions[nextQuestion]) endGame = true;

      return {
        ...state,
        currentQuestion: nextQuestion,
        gameState: endGame ? STAGES[2] : state.gameState,
      };

    case "RESET":
      return initialState;

    case "SELECT_RESPONSE":
      const responseCorrect = questions[state.currentQuestion].answer;
      let isCorrect = false
      let newScore = state.score + 1

      if (responseCorrect === action.value) isCorrect = true
      
      return {
        ...state,
        score: isCorrect ? newScore : state.score
      };
      
    default:
      return state;
  }
};

// Onde provem
export const QuizContext = createContext();

// Onde eu consumo
export const QuizProvider = ({ children }) => {
  const value = useReducer(quizReducer, initialState);

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
