/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { QuizContext } from "../../context/quiz";

import "./Question.css";

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContex);
  console.log("🚀 ~ file: Question.jsx:10 ~ Question ~ quizState:", quizState);

  return <div>Question</div>;
};

export default Question;
