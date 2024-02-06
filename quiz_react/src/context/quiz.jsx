import { createContext, useReducer } from "react";
import questions from "../data/questions";

const STAGES = ["Start", "Playing", "End"];

const initialState = {
  gameState: STAGES[0],
  questions,
  currentQuestion: 0,
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
        return Math.random() - .5;
      });
      console.log("reordenou");
      return {
        ...state,
        questions: reorderedQuestions,
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

