/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { QuizContext } from "../../context/quiz";

import "./Options.css";

const Options = ({ option, selectOption, answer }) => {
  const [quizState, dispatch] = useContext(QuizContext);
  return (
    <div className="option" onClick={() => selectOption()}>
      <p className="options-tag">{option}</p>
    </div>
  );
};

export default Options;
