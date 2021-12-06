import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function UserForm() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const submit = () => {
    dispatch({ type: "setName", payload: name });
  };
  console.log(name);

  return (
    <div>
      <label htmlFor="name">Name:</label>
      <input id="name" onChange={(e) => setName(e.target.value)}></input>
      <div>
        <Link to="/question" onClick={submit}>
          Start quiz
        </Link>
      </div>
    </div>
  );
}
