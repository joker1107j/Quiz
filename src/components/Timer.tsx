import { useEffect, useState } from "react";

const Timer = () => {
  let [time, settime] = useState(10);
  let myTimer;
  myTimer = setInterval(() => {
    settime(--time);
  }, 1000);
  let stoptimer;
  if (time <= 5) {
    stoptimer = true;
  }
  if (stoptimer === true) {
    clearInterval(myTimer);
    console.log("yo");
  }
  return (
    <>
      <h2>{time}</h2>
    </>
  );
};
export default Timer;
