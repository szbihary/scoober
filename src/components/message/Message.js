import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Fab from "@material-ui/core/Fab";
import "./message.css";

const Message = ({ leftAlign, user, calculation, result, bid }) => {
  return (
    <>
      <Grid container direction={leftAlign ? "row" : "row-reverse"} spacing={1}>
        <Grid item>
          <Avatar alt={user.name} src={user.avatar} className="avatar" />
        </Grid>
        <Grid item>
          <Grid container direction="column">
            <Grid item align={leftAlign ? "left" : "right"}>
              <Fab color="primary">{bid}</Fab>
            </Grid>
            <Grid item>
              <div className="messageBox">{calculation}</div>
              <div className="messageBox">{result}</div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Message;
