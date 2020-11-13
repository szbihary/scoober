import React from "react";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import Message from "../message/Message";
import styles from "./chatLayout.module.css";
import { getResult } from "../../utils/Utils";

const ChatLayout = ({ steps, initialNumber }) => {
  const user = { name: "Szabolcs Bihary", avatar: "/image/avatar.png" };
  const user2 = { name: "Takeaway", avatar: "/image/avatar2.png" };

  const messages = steps.map((step, index, steps) => {
    const isOwnPlayer = index % 2 === 0;
    const result = getResult(initialNumber, steps.slice(0, index + 1));
    const previousResult = getResult(initialNumber, steps.slice(0, index));
    const calculation = `[(${step} + ${previousResult}) / 3] = ${result}`;
    return (
      <Message
        key={index}
        leftAlign={isOwnPlayer}
        user={isOwnPlayer ? user : user2}
        calculation={calculation}
        result={result}
        bid={step}
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
