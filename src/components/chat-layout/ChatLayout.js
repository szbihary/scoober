import React from "react";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import Message from "../message/Message";
import styles from "./chatLayout.module.css";
import { getResult } from "../../utils/Utils";

const ChatLayout = ({ steps }) => {
  const user = { name: "Opponent player", avatar: "/image/avatar.png" };
  const user2 = { name: "My player", avatar: "/image/avatar2.png" };

  const messages = steps.map((step, index) => {
    const isOwnPlayer = step.player === "me";
    const result = getResult(steps.slice(0, index + 1));
    const previousResult = getResult(steps.slice(0, index));
    const calculation = `[(${step.value} + ${previousResult}) / 3] = ${result}`;
    return (
      <Message
        key={index}
        leftAlign={!isOwnPlayer}
        user={isOwnPlayer ? user2 : user}
        calculation={calculation}
        result={result}
        bid={step.value}
      />
    );
  });
  return (
    <div className={styles.messageContainer}>
      <Grid item xs={12}>
        <List>{messages}</List>
      </Grid>
    </div>
  );
};

export default ChatLayout;
