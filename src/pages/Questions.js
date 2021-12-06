import React, { useState } from "react";
import Question from "../question/Question";
import Data from "../data/Data";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userSlice } from "../store/store";

export default function Questions() {
  const dispatch = useDispatch();
  const user = useSelector(userSlice);
  const [isFinish, setIsFinish] = useState(false);
  const [question, setQuestion] = useState(Data[0]);
  const [questionIndex, setQuestionIndex] = useState(0);

  console.log(Data);
  console.log(user);
  console.log(isFinish)
  
  console.log(questionIndex);

  const saveScore = () => {
    let scoreList = [];
    if (localStorage.getItem("score") === null) {
      scoreList.push(user)
      console.log(scoreList)
      JSON.stringify(localStorage.setItem("score", JSON.stringify(scoreList)));
    } else {
      scoreList = JSON.parse(localStorage.getItem("score"))
      scoreList.push(user)
      JSON.stringify(localStorage.setItem("score", JSON.stringify(scoreList)));
    }
  };

  const scoreResult = () => {
    let score = 0;
    for (let i = 0; i < Data.length; i++) {
      if (Data[i].answer === user.answer[i]) {
        score += 1;
      }
    }
    dispatch({ type: "finalScore", payload: score });
    saveScore();
  };

  const handleSubmit = (e) => {
    if (user.answer.length === Data.length) {
      console.log("over");
      setIsFinish(true);
      scoreResult();
      return dispatch({type:"reset"})
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
      {isFinish && (
        <div>
          <p>You finished all questions!! The final score is {user.score}</p>
          <Link to="/">Back to leaderboard</Link>
        </div>
      )}
    </div>
  );
}
