/* eslint-disable no-unused-vars */

// React Hooks & context
import { useContext, useEffect } from "react";
import { QuizContext } from "./context/quiz";

// Componentes
import Spinner from "./components/Spinner/Spinner";
import Welcome from "./components/Welcome/Welcome";
import Question from "./components/Question/Question";
import GameOver from "./components/GameOver/GameOver";

// estilização
import "./App.css";

export default function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  if (!quizState) {
    <Spinner />;
  }
  useEffect(() => {
    dispatch({ type: "REORDER_QUESTIONS" });
  }, []);

  return (
    <div className="App">
      <h1>Quiz de Progrmação</h1>
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Playing" && <Question />}
      {quizState.gameStage === "End" && <GameOver />}
    </div>
  );
}
