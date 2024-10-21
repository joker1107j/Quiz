import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BufferPage = () => {
  const location = useLocation();
  const nagivate = useNavigate();
  let [styleChange, setStyleChange] = useState(false);
  const topScore = 0;
  const username = location.state.username;
  const HandleClick = () => {
    setStyleChange(true);
    setTimeout(() => {
      setStyleChange(false);
      nagivate("/home/game", { replace: true, state: { username, topScore } });
    }, 500);
  };
  return (
    <>
      <div
        className="start-div"
        style={
          styleChange
            ? { scale: "120%", opacity: "0%" }
            : { scale: "100%", opacity: "100%" }
        }
      >
        <h3>Click here to start!!</h3>
        <button className="start-btn" onClick={HandleClick}>
          Start
        </button>
      </div>
    </>
  );
};
export default BufferPage;
