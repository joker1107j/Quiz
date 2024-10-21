import { useLocation, useNavigate } from "react-router-dom";

const ResultPage = () => {
  const location = useLocation();
  const username = location.state.username;
  const navigate = useNavigate();
  const currentScore = location.state.currentScore;
  const topScore = currentScore;
  const HandleClick = () => {
    navigate("/home/game", { replace: true, state: { username, topScore } });
  };
  return (
    <>
      <h2>Result {currentScore}</h2>
      <button onClick={HandleClick}>Try Again</button>
    </>
  );
};
export default ResultPage;
