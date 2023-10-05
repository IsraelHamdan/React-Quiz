import { useContext } from "react";
import { QuizContext } from "../../context/quiz";

import Options from "../Options/Options";

import "./Question.css";

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestion];
  const onSelectOption = () => {
    console.log("teste");
  };

  return (
    <div className="question">
      <p className="question-contador">
        Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}
      </p>
      <h2 className="question-title">{currentQuestion.question}</h2>
      <div id="questions-options">
        {currentQuestion.options.map((option) => (
          <Options
            key={option}
            option={option}
            answer={currentQuestion.answer}
            selectOption={() => onSelectOption()}
          />
        ))}
      </div>
      {quizState.answerSelected && (
        <button
          onClick={() => dispatch({ type: "CHANGE_QUESTION" })}
          className="questions-btn btn"
          answer={currentQuestion.answer}>
          Proxima
        </button>
      )}
    </div>
  );
};

export default Question;
