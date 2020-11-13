import * as types from "../actions/actionTypes";
import { getResult } from "../../utils/Utils";

const INIT_STATE = {
  gameState: "started",
  initialNumber: 19,
  steps: [],
};

export default function gameReducer(state = INIT_STATE, action) {
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
      return { ...INIT_STATE };
    default:
      return state;
  }
}
