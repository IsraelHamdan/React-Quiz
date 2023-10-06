/* eslint-disable no-unused-vars */

// React Hooks & context
import { useContext, useEffect } from "react";
import { QuizContext } from "./context/quiz";

// Componentes
import Wellcome from "./components/WellCome/Wellcome";
import Questions from "./components/Question/Question";
import GameOver from "./components/GameOver/GameOver";

// estilização
import "./App.css";
import Spinner from "./components/Spinner/Spinner";

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
      {quizState.gameStage === "Start" && <Wellcome />}
      {quizState.gameStage === "Playing" && <Questions />}
      {quizState.gameStage === "End" && <GameOver />}
    </div>
  );
}
