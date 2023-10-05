/* eslint-disable react/prop-types */
import { createContext } from "react";

export const QuizContex = createContext();

export const QuizProvider = ({ children }) => {
  const value = { name: "Quiz" };
  return <QuizContex.Provider value={value}>{children}</QuizContex.Provider>;
};
