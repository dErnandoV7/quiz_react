import { createContext, useReducer } from "react";
import questions from "../data/questions_complete";

const STAGES = ["Start", "Category", "Playing", "End"];

const initialState = {
  gameState: STAGES[0],
  questions,
  currentQuestion: 0,
  score: 0,
  answerSelected: false,
  help: false,
  optionToHide: null,
};

const quizReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_STATE":
      return {
        ...state,
        gameState: STAGES[1],
      };

    case "START_GAME":
      let quizQuestions = null;

      state.questions.forEach((question) => {
        if (question.category == action.payload.category) {
          quizQuestions = question.questions;
        }
      });

      return {
        ...state,
        questions: quizQuestions,
        gameState: STAGES[2],
      };

    case "REORDER_QUESTIONS":
      const reorderedQuestions = state.questions.sort(() => {
        return Math.random() - 0.5;
      });
      return {
        ...state,
        questions: reorderedQuestions,
      };

    case "TIP":
      return {
        ...state,
        help: "tip",
      };

    case "REMOVE_OPTION":
      const questionWithoutOption = state.questions[state.currentQuestion];

      let repeat = true;
      let optionToHide;

      const reorderedOptions = questionWithoutOption.options.sort(() => {
        return Math.random() - 0.5;
      });

      reorderedOptions.forEach((option) => {
        if (repeat && option !== questionWithoutOption.answer) {
          optionToHide = option;
          repeat = false;
        }
      });

      return {
        ...state,
        optionToHide,
        help: true,
      };

    case "CHANGE_QUESTION":
      const nextQuestion = state.currentQuestion + 1;
      let endGame = false;

      if (!state.questions[nextQuestion]) endGame = true;

      return {
        ...state,
        currentQuestion: nextQuestion,
        gameState: endGame ? STAGES[3] : state.gameState,
        answerSelected: false,
        help: false,
      };

    case "RESET":
      return initialState;

    case "CHECK_ANSWER":
      if (state.answerSelected) return state;

      const { answer, option } = action.payload;
      let correct = 0;

      if (answer === option) correct = 1;

      return {
        ...state,
        score: state.score + correct,
        answerSelected: answer,
      };

    case "INITIAL_QUIZ":
      return {
        ...state,
        gameState: STAGES[2],
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
