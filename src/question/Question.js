import React from "react";

export default function Question({ data, handleSubmit }) {
  

  return (
    <div className="questionWrapper">
      <div className="questionHeader"> {data.name}</div>
      <form onSubmit={handleSubmit}>
        <input id="true" type="radio" name="boolean" value="true" />
        <label htmlFor="true">True</label>
        <input id="false" type="radio" name="boolean" value="false" />
        <label htmlFor="false">False</label>
        <button type="submit">Next</button>
      </form>
    </div>
  );
}
