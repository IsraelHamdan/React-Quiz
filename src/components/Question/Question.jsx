import { useContext } from "react";
import { QuizContext } from "../../context/quiz";

import "./Question.css";

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestion];

  return (
    <div className="question">
      <p className="question-contador">
        Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}
      </p>
      <h2 className="question-title">{currentQuestion.question}</h2>
      <p className="questions-options">Options</p>
      <button
        onClick={() => dispatch({ type: "CHANGE_QUESTION" })}
        className="questions-btn btn">
        Proxima
      </button>
    </div>
  );
};

export default Question;
