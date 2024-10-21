import { Outlet, useLocation } from "react-router-dom";
import "../App.css";
function MainPage() {
  let location = useLocation();
  // let topScore = location.state.topScore;

  return (
    <>
      <div className="body layer1">
        <div className="header">
          <h1> Welcome {location.state.username}</h1>
          <h2>Top Score: {localStorage.getItem("topScore")}</h2>
        </div>
        <div className="body-content-div">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default MainPage;
