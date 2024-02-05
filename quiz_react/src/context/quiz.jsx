import { createContext } from "react";

// Onde provem
export const QuizContext = createContext();

// Onde eu consumo
export const QuizProvider = ({ children }) => {
  const value = "Volta Roger Guedes"
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
