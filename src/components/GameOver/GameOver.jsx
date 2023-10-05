// React Hooks and context
import { useContext } from "react";
import { QuizContext } from "../../context/quiz";

// Estaticos e estilização
import "./GameOver.css";
import wellDone from "../../assets/welldone.svg";

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  return (
    <div className="gameOver">
      <h2 className="gameOver-title">Fim de Jogo</h2>
      <div className="gameOver-points">
        <p className="gameOver-points_value">Seus pontos: {quizState.score}</p>
        <p className="gameOver-points_acertos">
          Você acertou {quizState.score} de {quizState.questions.length}{" "}
          perguntas
        </p>
      </div>
      <img src={wellDone} alt="fim do quiz" className="gameOver-img" />
      <button
        onClick={() => dispatch({ type: "NEW_GAME" })}
        className="gameOver-btn btn">
        Reiniciar
      </button>
    </div>
  );
};

export default GameOver;
