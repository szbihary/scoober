import { useState, useEffect } from "react";
import io from "socket.io-client";
import Game from "./components/game/Game";
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: blue[300],
    },
  },
});

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
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Game socket={socket} />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
