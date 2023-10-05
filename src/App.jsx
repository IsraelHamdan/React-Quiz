// React Hooks & context
import { useContext } from "react";
import { QuizContext } from "./context/quiz";

// Componentes
import Wellcome from "./components/WellCome/Wellcome";
import Questions from "./components/Question/Question";

import "./App.css";

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="App">
      <h1>Quiz de Progrmação</h1>
      {quizState.gameStage === "Start" && <Wellcome />}
      {quizState.gameStage === "Playing" && <Questions />}
    </div>
  );
}

export default App;
