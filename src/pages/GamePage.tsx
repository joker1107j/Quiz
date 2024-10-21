import { useLocation, useNavigate } from "react-router-dom";
import QuestionCard from "../components/QuestionCard";

import timer from "../components/Timer";
import { useEffect, useState } from "react";
import Timer from "../components/Timer";

const GamePage = () => {
  let [queSerial, setQueSerial] = useState<any>([]);
  useEffect(() => {
    let tempQueSerial = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < 10; i++) {
      let bufferRandom = Math.floor(Math.random() * 9);
      const bufferNumber = tempQueSerial[i];
      tempQueSerial[i] = tempQueSerial[bufferRandom];
      tempQueSerial[bufferRandom] = bufferNumber;
    }
    setQueSerial(tempQueSerial);
  }, []);
  //
  //
  const location = useLocation();
  const username = location.state.username;
  //
  //
  let [isCorrect, setCorrect] = useState<boolean>();
  useEffect(() => {
    if (isCorrect === true) {
      setCurrentScore(++currentScore);
    }
    setCorrect(false);
  }, [isCorrect]);
  //
  //
  const navigate = useNavigate();
  let [currentScore, setCurrentScore] = useState<number>(0);
  let [isGameDone, setGameDone] = useState<boolean>(false);
  useEffect(() => {
    if (isGameDone === true) {
      const topScore = currentScore;
      const Ctop: number = +(localStorage.getItem("topScore") || 0);
      if (Ctop < currentScore) {
        localStorage.setItem("topScore", JSON.stringify(currentScore));
      }

      navigate("/home/result", {
        replace: true,

        state: { username, currentScore, topScore },
      });
    }
  }, [isGameDone]);
  return (
    <>
      <div className="game-div">
        <div className="side-panel">
          <div className="current-score">
            <h2>Current Score:-</h2>
            <p>{currentScore}</p>
          </div>
          <div className="timer-div"></div>
        </div>
        <div className="question-box">
          <QuestionCard
            isCorrect={setCorrect}
            queArray={queSerial}
            isGameDone={setGameDone}
          />
        </div>
      </div>
    </>
  );
};
export default GamePage;
