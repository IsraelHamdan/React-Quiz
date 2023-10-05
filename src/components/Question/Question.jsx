/* eslint-disable no-unused-vars */

// React Hooks
import { useContext } from "react";

import { QuizContex } from "../../context/quiz";

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContex);
  // const currentQuestion = quizState.questions[quizState.currentQuestion];

  return (
    <div className="question">
      <p className="question-contador">
        Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}
      </p>
      <h2 className="question-title">Pergunta</h2>
      <div className="question-options">
        <p className="question-options_list">Options</p>
      </div>
      <button className="questions-btn btn"></button>
    </div>
  );
};

export default Question;
