import { createStore } from "redux";
import rootReducer from "./reducers/gameReducer";

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState);
}
