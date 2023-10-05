/* eslint-disable no-unused-vars */

// React Hooks & context
import { useContext, useEffect } from "react";
import { QuizContext } from "./context/quiz";

// Componentes
import Wellcome from "./components/WellCome/Wellcome";
import Questions from "./components/Question/Question";

// estilização
import "./App.css";

export default function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() => {
    dispatch({ type: "REORDER_QUESTIONS" });
  }, []);

  return (
    <div className="App">
      <h1>Quiz de Progrmação</h1>
      {quizState.gameStage === "Start" && <Wellcome />}
      {quizState.gameStage === "Playing" && <Questions />}
    </div>
  );
}
