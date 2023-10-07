/* eslint-disable react/no-unknown-property */
import { useContext } from "react";
import { QuizContext } from "../../context/quiz";

import Options from "../Options/Options";

import "./Question.css";

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestion];
  const onSelectOption = (option) => {
    console.log(option);
  };

  return (
    <div className="question">
      <p className="question-contador">
        Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}
      </p>
      <h2 className="question-title">{currentQuestion.question}</h2>
      <div id="questions-options">
        {currentQuestion.options.map((option) => {
          return (
            <Options
              option={option}
              key={option}
              answere={currentQuestion.answer}
              selectOption={onSelectOption(option)}
            />
          );
        })}
      </div>
      {}
    </div>
  );
};

export default Question;
