import * as types from "../actions/actionTypes";
import { getResult, getRandomInt } from "../../utils/Utils";

const getInitState = () => ({
  gameState: "started",
  initialNumber: getRandomInt(0, 100),
  steps: [],
});

export default function gameReducer(state = getInitState(), action) {
  switch (action.type) {
    case types.ROUND:
      let gameState = state.gameState;
      const newBid = action.payload;
      const steps = [...state.steps, newBid];
      const result = getResult(state.initialNumber, steps);
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
