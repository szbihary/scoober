import { useState, useEffect } from "react";
import io from "socket.io-client";
import Game from "./components/game/Game";
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";

const getSocket = () => io();
const store = configureStore();

function App() {
  const [socket] = useState(getSocket());

  useEffect(() => {
    socket.on("connect", () =>
      console.log(`connected to socket: ${socket.id}`)
    );
    return () => {
      socket.on("disconnect", () => {
        socket.close();
        console.log("disconnected");
      });
    };
  });

  return (
    <Provider store={store}>
      <Game socket={socket} />
    </Provider>
  );
}

export default App;
