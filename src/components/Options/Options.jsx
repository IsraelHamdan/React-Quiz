import { useContext } from "react";
import { QuizContext } from "../../context/quiz";
import PropTypes from "prop-types";

import "./Options.css";

const Options = ({ option, selectOption, answer }) => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="option" onClick={() => selectOption(option)}>
      <p className="option-tag">{option}</p>
    </div>
  );
};

Options.propTypes = {
  option: PropTypes.string.isRequired,
  selectOption: PropTypes.func.isRequired,
  answer: PropTypes.string.isRequired,
};

export default Options;
