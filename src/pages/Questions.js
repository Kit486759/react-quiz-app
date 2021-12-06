import React, { useState } from "react";
import Question from "../question/Question";
import Data from "../data/Data";
import { useDispatch, useSelector, useStore } from "react-redux";

export default function Questions() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state);
  const [isFinish, setIsFinish] = useState(false);
  const [question, setQuestion] = useState(Data[0]);
  const [questionIndex, setQuestionIndex] = useState(0);
//   const [score, setScore]

//   console.log(Data);
//   console.log(user);

  const scoreResult = () => {
    let score = 0;
    for (let i = 0; i < Data.length; i++) {
      if (Data[i].answer === user.answer[i]) {
        score += 1;
      }
    }
    dispatch({ type: "finalScore", payload: score });
  };

  const handleSubmit = (e) => {
    if (user.answer.length === Data.length) {
      console.log("over");
      setIsFinish(true);
      return scoreResult();
    }
    console.log(Data.length);
    console.log(user.answer.length);

    e.preventDefault();
    console.log(e.target.boolean.value);

    if (e.target.boolean.value === "true") {
      dispatch({ type: "submit", payload: true });
    } else {
      dispatch({ type: "submit", payload: false });
    }

    document.getElementById("true").checked = false;
    document.getElementById("false").checked = false;
    setQuestion("");
    setQuestionIndex(questionIndex + 1);
    setQuestion(Data[questionIndex]);
  };

  return (
    <div>
      This is questions page
      {!isFinish && <Question data={question} handleSubmit={handleSubmit} />}
      {isFinish && <p>No more questions, your final score is {user.score}</p>}
    </div>
  );
}
