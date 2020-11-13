import ListItem from "@material-ui/core/ListItem";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Fab from "@material-ui/core/Fab";
import styles from "./message.module.css";

const Message = ({ leftAlign, user, calculation, result, bid }) => {
  return (
    <>
      <ListItem>
        <Grid
          container
          direction={leftAlign ? "row" : "row-reverse"}
          spacing={1}
        >
          <Grid item>
            <Avatar
              alt={user.name}
              src={user.avatar}
              className={styles.avatar}
            />
          </Grid>
          <Grid item>
            <Grid container direction="column">
              <Grid item align={leftAlign ? "left" : "right"}>
                <Fab color="primary">{bid}</Fab>
              </Grid>
              <Grid item>
                <div className={styles.messageBox}>{calculation}</div>
                <div className={styles.messageBox}>{result}</div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </ListItem>
    </>
  );
};

export default Message;
