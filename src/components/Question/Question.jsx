/* eslint-disable no-unused-vars */

// React Hooks
import { useContext } from "react";

import { QuizContex } from "../../context/quiz";

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContex);
  console.log("🚀 ~ file: Question.jsx:10 ~ Question ~ quizState:", quizState);

  return <div>Question</div>;
};

export default Question;
