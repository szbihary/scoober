import styles from "./game.module.css";
import AppBar from "@material-ui/core/AppBar";
import Fab from "@material-ui/core/Fab";
import Typography from "@material-ui/core/Typography";
import ChatLayout from "../chat-layout/ChatLayout";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../../redux/actions/actionCreators";
import Result from "../result/Result";

const bidOptions = [
  { value: -1, title: "add minus one" },
  { value: 0, title: "add zero" },
  { value: +1, title: "add plus one" },
];

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
        {bidOptions.map((bid, index) => (
          <Fab
            key={index}
            color="primary"
            aria-label={bid.title}
            onClick={() => props.actions.nextRound(bid.value)}
          >
            {bid.value}
          </Fab>
        ))}
      </div>
      {props.gameState === "ended" && (
        <Result
          reset={() => props.actions.resetGame()}
          success={props.steps.length % 2 === 0}
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
