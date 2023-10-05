/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import questions from "../data/questions.jsx";

export const QuizContex = createContext();

const STAGES = ["Start", "Playing", "End"];

const initalState = {
  gameStage: STAGES[0],
  questions,
};

const quizReducer = (state, action) => {
  console.log(
    "🚀 ~ file: quiz.jsx:15 ~ quizReducer ~ state, action:",
    state,
    action
  );
  switch (action.type) {
    case "CHANGE_STATE":
      return {
        ...state,
        gameStage: STAGES[1],
      };
    default:
      return state;
  }
};

export const QuizProvider = ({ children }) => {
  const value = useReducer(quizReducer, initalState);
  return <QuizContex.Provider value={value}>{children}</QuizContex.Provider>;
};
