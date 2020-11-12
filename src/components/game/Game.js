import React from "react";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import Message from "../message/Message";
import styles from "./game.module.css";

const Game = () => {
  const user = { name: "Szabolcs Bihary", avatar: "/image/avatar.png" };
  const calculation = "[(-1 + 19) / 3] = 6";
  const result = 6;
  return (
    <div className={styles.messageContainer}>
      <Grid item xs={12}>
        <List>
          <Message
            leftAlign={true}
            user={user}
            calculation={calculation}
            result={result}
          />
          <Message
            leftAlign={false}
            user={user}
            calculation={calculation}
            result={result}
          />
          <Message
            leftAlign={true}
            user={user}
            calculation={calculation}
            result={result}
          />
        </List>
      </Grid>
    </div>
  );
};

export default Game;
