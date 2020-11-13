import * as types from "./actionTypes";

export function nextRound(payload) {
  return { type: types.ROUND, payload };
}

export function resetGame() {
  return { type: types.RESET };
}
