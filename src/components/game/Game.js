import styles from "./game.module.css";
import AppBar from "@material-ui/core/AppBar";
import Fab from "@material-ui/core/Fab";
import Typography from "@material-ui/core/Typography";
import ChatLayout from "../chat-layout/ChatLayout";

function Game() {
  return (
    <div className={styles.container}>
      <AppBar className={styles.header}>
        <Typography variant="h4">Scoober team</Typography>
        <Typography variant="subtitle1">Win the game or win the job</Typography>
      </AppBar>
      <div className={styles.content}>
        <ChatLayout />
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

export default Game;
