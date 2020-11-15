import * as types from "../actions/actionTypes";
import { getResult } from "../../utils/Utils";

const getInitState = () => ({
  gameState: "connected",
  steps: [],
});

export default function gameReducer(state = getInitState(), action) {
  switch (action.type) {
    case types.ROUND:
      const round = action.payload;
      let gameState = state.gameState;
      const steps = [...state.steps, round];
      const result = getResult(steps);
      if (result === 1) {
        gameState = "ended";
      }
      return { ...state, steps, gameState };
    case types.RESET:
      return getInitState();
    default:
      return state;
  }
}
