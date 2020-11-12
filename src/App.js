import styles from "./App.module.css";
// import { useState } from "react";
// import io from "socket.io-client";
import AppBar from "@material-ui/core/AppBar";
import Fab from "@material-ui/core/Fab";
import Typography from "@material-ui/core/Typography";
import Game from "./components/game/Game";

function App() {
  // const [connected, setConnected] = useState(false);
  const connected = false;

  // const socket = io("http://localhost:3000");
  // socket.on("connect", () => setConnected(true));
  // socket.on("error", (error) => console.log("error: " + error));
  // socket.on("disconnect", () => console.log("disconnect"));

  return (
    <div className={styles.container}>
      <AppBar className={styles.header}>
        <Typography variant="h4">Scoober team</Typography>
        <Typography variant="subtitle1">Win the game or win the job</Typography>
      </AppBar>
      <div className={styles.content}>
        <Game />
      </div>
      <div className={styles.footer} my={4}>
        <Fab color="primary" aria-label="add minus one">
          -1
        </Fab>
        <Fab color="primary" aria-label="add zero">
          0
        </Fab>
        <Fab color="primary" aria-label="add plus one">
          +1
        </Fab>
      </div>
    </div>
  );
}

export default App;
