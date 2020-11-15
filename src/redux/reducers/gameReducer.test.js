import gameReducer from "./gameReducer";
import * as actions from "../actions/actionCreators";

describe("GameReducer", () => {
  const steps = [
    { value: 19, player: "me" },
    { value: -1, player: "opponent" },
    { value: 0, player: "me" },
  ];
  it("should reset game state when RESET action is passed", () => {
    const state = {
      gameState: "ended",
      steps,
    };
    const action = actions.resetGame();
    const newState = gameReducer(state, action);

    expect(newState.gameState).toEqual("connected");
    expect(newState.steps).toHaveLength(0);
  });

  it("should append the round value to 'steps' when ROUND action is passed", () => {
    const initState = {
      gameState: "connected",
      steps,
    };
    const newBid = -1;
    const action = actions.nextRound(newBid);
    const newState = gameReducer(initState, action);

    expect(newState.gameState).toEqual("connected");
    expect(newState.steps).toHaveLength(4);
    expect(newState.steps[3]).toEqual(newBid);
  });

  it("should set the gameState to 'ended' when the calculated result reaches 1", () => {
    const initState = {
      gameState: "connected",
      steps,
    };
    const newBid = { value: 1, player: "opponent" };
    const action = actions.nextRound(newBid);
    const newState = gameReducer(initState, action);

    expect(newState.gameState).toEqual("ended");
  });
});
