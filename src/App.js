// import { useState } from "react";
// import io from "socket.io-client";
import Game from "./components/game/Game";
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";

const store = configureStore();

function App() {
  // const [connected, setConnected] = useState(false);
  // const connected = false;

  // const socket = io("http://localhost:3000");
  // socket.on("connect", () => setConnected(true));
  // socket.on("error", (error) => console.log("error: " + error));
  // socket.on("disconnect", () => console.log("disconnect"));

  return (
    <Provider store={store}>
      <Game />
    </Provider>
  );
}

export default App;
