import { createStore } from "redux";
import Data from "../data/Data";

const userStat = {
  name: "",
  score: 0,
  answer: [],
};

const userReducer = (state = userStat, action) => {
  if (action.type === "submit") {
    return {
      ...state,
      answer: [...state.answer, action.payload],
    };
  }
  if (action.type === "finalScore") {
    return {
      ...state,
      score: action.payload,
    };
  }
  if (action.type === "reset") {
    return (state = userStat);
  }
  if (action.type === "setName") {
    return {
      ...state,
      name:action.payload
    }
  }
  return state;
};

const store = createStore(userReducer);

export const userSlice = (state) => state;

export default store;
