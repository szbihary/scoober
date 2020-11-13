import styles from "./game.module.css";
import AppBar from "@material-ui/core/AppBar";
import Fab from "@material-ui/core/Fab";
import Typography from "@material-ui/core/Typography";
import ChatLayout from "../chat-layout/ChatLayout";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../../redux/actions/actionCreators";
import Result from "../result/Result";

function Game(props) {
  return (
    <div className={styles.container}>
      <AppBar className={styles.header}>
        <Typography variant="h4">Scoober team</Typography>
        <Typography variant="subtitle1">Win the game or win the job</Typography>
      </AppBar>
      <div className={styles.content}>
        <ChatLayout steps={props.steps} initialNumber={props.initialNumber} />
      </div>
      <div className={styles.footer} my={4}>
        <Fab
          color="primary"
          aria-label="add minus one"
          onClick={() => {
            props.actions.nextRound(-1);
          }}
        >
          -1
        </Fab>
        <Fab
          color="primary"
          aria-label="add zero"
          onClick={() => {
            props.actions.nextRound(0);
          }}
        >
          0
        </Fab>
        <Fab
          color="primary"
          aria-label="add plus one"
          onClick={() => {
            props.actions.nextRound(+1);
          }}
        >
          +1
        </Fab>
      </div>
      {props.gameState === "ended" && (
        <Result
          reset={() => props.actions.resetGame()}
          success={props.steps.length % 2 === 1}
        />
      )}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    steps: state.steps,
    initialNumber: state.initialNumber,
    gameState: state.gameState,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionCreators, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
