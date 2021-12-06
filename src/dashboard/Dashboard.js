import React, { useState, useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { userSlice } from "../store/store";

export default function Dashboard() {
  const dispatch = useDispatch();
  const user = useSelector(userSlice);

  const [scoreList, setScoreList] = useState();

  useEffect(() => {
    const renderScore = () => {
      if (localStorage.getItem("score") !== null) {
        setScoreList(JSON.parse(localStorage.getItem("score")));
      }
    };
    renderScore();
  }, []);

  console.log(scoreList);

  return (
    <div>
      {scoreList ? (
        <>
          <ul>
            {scoreList.map((user, index) => {
              return (
                <li key={index}>
                  <p>Name: {user.name}</p>
                  <p>Score: {user.score}</p>
                </li>
              );
            })}
          </ul>
        </>
      ) : (
        <p>No score</p>
      )}
    </div>
  );
}
