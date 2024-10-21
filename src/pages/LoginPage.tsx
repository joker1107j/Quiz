import { useState } from "react";
import { useNavigate } from "react-router-dom";
let username: string = "";
let inputValue: string;
let setInputValue: any;
let isFocused: boolean;
let setFocused: any;
let isClicked: boolean;
let setClicked: any;
const Login = () => {
  const topScore = 0;
  let navigate = useNavigate();
  [inputValue, setInputValue] = useState("");
  [isClicked, setClicked] = useState(false);
  const HandleClick = () => {
    setClicked(true);
    username = inputValue;
    setInputValue("");
    setTimeout(() => {
      navigate("/home/buffer", {
        replace: true,
        state: { username, topScore },
      });
    }, 900);
  };
  [isFocused, setFocused] = useState(false);
  const HandleFocus = () => {
    setFocused((prev: any) => {
      console.log(!prev);
      return !prev;
    });
  };
  return (
    <>
      <div className="loginPage-body">
        <div className="input-body ">
          <div
            className="login-div"
            style={
              isClicked
                ? { scale: "115%", backgroundPosition: "0 550px" }
                : { scale: "100%" }
            }
          >
            <div
              className="ball"
              style={
                isClicked
                  ? {
                      height: "550px",
                    }
                  : {}
              }
            ></div>
            <h1
              className="login-heading"
              style={
                isClicked
                  ? { opacity: "0%", bottom: "200px" }
                  : { opacity: "100%" }
              }
            >
              Quiz Time!
            </h1>
            <div
              className="input-div"
              style={isClicked ? { left: "350px" } : {}}
            >
              <label
                className="label"
                htmlFor="Name"
                style={isFocused ? { top: "25px" } : { top: "55px" }}
              >
                Name
              </label>
              <input
                onFocus={HandleFocus}
                onBlur={HandleFocus}
                onKeyDown={(e: any) => {
                  if (e.key === "Enter") {
                    HandleClick();
                  }
                }}
                value={inputValue}
                onChange={(e: any) => {
                  setInputValue(e.target.value);
                }}
                className="login-input"
                type="text"
              />

              <button onClick={HandleClick} className="login-btn">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
