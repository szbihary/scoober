import * as types from "../actions/actionTypes";
import { getResult, getRandomInt } from "../../utils/Utils";
import { RANDOM_INT_MIN, RANDOM_INT_MAX } from "../../config";

getRandomInt(RANDOM_INT_MIN, RANDOM_INT_MAX);

const getInitState = () => ({
  gameState: "connected",
  initialNumber: 49,
  steps: [],
});

export default function gameReducer(state = getInitState(), action) {
  switch (action.type) {
    case types.ROUND:
      const round = action.payload;
      let gameState = state.gameState;
      const steps = [...state.steps, round];
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
