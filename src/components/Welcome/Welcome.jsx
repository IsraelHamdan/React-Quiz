/* eslint-disable no-unused-vars */

// React Hooks
import { useContext } from "react";

import { QuizContext } from "../../context/quiz";

//estilização e arquivos estáticos
import img from "../../assets/quiz.svg";
import "./Welcome.css";
import Spinner from "../Spinner/Spinner";

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  if (!quizState || quizState.gameStage !== "Start") {
    return <Spinner />;
  }
  return (
    <div className="Welcome">
      <h2 className="Welcome-title">Seja bem-vindo</h2>
      <p className="Welcome-p">Clique no botão para começar</p>
      <button
        onClick={() => {
          dispatch({ type: "CHANGE_STATE" });
        }}
        className="Welcome-btn btn">
        Iniciar
      </button>
      <img className="Welcome-img img" src={img} alt="Inicio do quiz" />
    </div>
  );
};

export default Welcome;
