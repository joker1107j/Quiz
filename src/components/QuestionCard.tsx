import { useEffect, useRef, useState } from "react";
import questions from "../../assets/questions.json";

const QuestionCard = (props: any) => {
  let [queIndex, setIndex] = useState(0);
  let question: string = "";
  let option1: string = "";
  let option2: string = "";
  let option3: string = "";
  let option4: string = "";
  let ans: number;

  const queSerial = props.queArray;
  questions.map((obb: any, index: any) => {
    if (queSerial[queIndex] === index) {
      question = obb.que;
      option1 = obb.opt1;
      option2 = obb.opt2;
      option3 = obb.opt3;
      option4 = obb.opt4;
      ans = obb.ans - 1;
    }
  });

  const optRef1: any = useRef();
  const optRef2: any = useRef();
  const optRef3: any = useRef();
  const optRef4: any = useRef();
  const refArray = [optRef1, optRef2, optRef3, optRef4];

  useEffect(() => {
    for (let i = 0; i < 4; i++) {
      refArray[i].current.style.backgroundColor = "#FF6F61";
    }
    setFinalChoice([-1, 0]);
  }, [queIndex]);

  ///

  const HandleOptionClick = (index: number) => {
    for (let i = 0; i < 4; i++) {
      setFinalChoice([index, ans]);
      if (i === index) {
        refArray[i].current.style.backgroundColor = "#e75042";
      } else {
        refArray[i].current.style.backgroundColor = "#FF6F61";
      }
    }
  };

  //
  //

  let [finalChoice, setFinalChoice] = useState([-1, 0]);
  const HandleNextClick = () => {
    if (finalChoice[0] !== -1) {
      for (let i = 0; i < 4; i++) {
        if (i === ans) {
          refArray[i].current.style.backgroundColor = "green";
        } else {
          refArray[i].current.style.backgroundColor = "red";
        }
      }
      setTimeout(() => {
        if (finalChoice[0] === finalChoice[1]) {
          props.isCorrect(true);
        }
        if (queIndex < 9) {
          setIndex(++queIndex);
        } else {
          props.isGameDone(true);
        }
      }, 1000);
    } else {
      alert("Select an option first!!!");
    }
  };
  return (
    <>
      <div className="question-body">
        <h3 className="question-heading">
          {queIndex + 1}.{question}
        </h3>
        <div className="options-div">
          <button
            ref={optRef1}
            onClick={() => {
              HandleOptionClick(0);
            }}
            className="option one"
          >
            {option1}
          </button>
          <button
            ref={optRef2}
            onClick={() => {
              HandleOptionClick(1);
            }}
            className="option two"
          >
            {option2}
          </button>
          <button
            ref={optRef3}
            onClick={() => {
              HandleOptionClick(2);
            }}
            className="option three"
          >
            {option3}
          </button>
          <button
            ref={optRef4}
            onClick={() => {
              HandleOptionClick(3);
            }}
            className="option four"
          >
            {option4}
          </button>
          <button className="next-button" onClick={HandleNextClick}>
            next
          </button>
        </div>
      </div>
    </>
  );
};
export default QuestionCard;
