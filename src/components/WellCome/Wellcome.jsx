/* eslint-disable no-unused-vars */

// React Hooks
import { useContext } from "react";

import { QuizContext } from "../../context/quiz";

//estilização e arquivos estáticos
import img from "../../assets/quiz.svg";
import "./Wellcome.css";

const Wellcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  return (
    <div className="wellcome">
      <h2 className="wellcome-title">Seja bem-vindo</h2>
      <p className="wellcome-p">Clique no botão para começar</p>
      <button
        onClick={() => {
          dispatch({ type: "CHANGE_STATE" });
        }}
        className="wellcome-btn btn">
        Iniciar
      </button>
      <img className="wellcome-img img" src={img} alt="Inicio do quiz" />
    </div>
  );
};

export default Wellcome;
