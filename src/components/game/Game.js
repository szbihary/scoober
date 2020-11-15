import React from "react";
import styles from "./game.module.css";
import AppBar from "@material-ui/core/AppBar";
import Fab from "@material-ui/core/Fab";
import Typography from "@material-ui/core/Typography";
import ChatLayout from "../chat-layout/ChatLayout";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../../redux/actions/actionCreators";
import Result from "../result/Result";
import { BID_OPTIONS } from "../../config";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.socket = props.socket;
  }

  componentDidMount() {
    this.socket.on("startGame", () => this.props.actions.resetGame());

    this.socket.on("nextRound", (round) => {
      const player = round.player === this.socket.id ? "me" : "opponent";
      const nextStep = { value: round.value, player };
      this.props.actions.nextRound(nextStep);
    });
  }

  render() {
    const content = this.props.initialNumber ? (
      <ChatLayout
        steps={this.props.steps}
        initialNumber={this.props.initialNumber}
      />
    ) : (
      <div>Loading game...</div>
    );

    const lastStep = this.props.steps[this.props.steps.length - 1];
    const lastStepWasMe = lastStep && lastStep.player === "me";
    return (
      <div className={styles.container}>
        <AppBar className={styles.header}>
          <Typography variant="h4">Scoober team</Typography>
          <Typography variant="subtitle1">
            Win the game or win the job
          </Typography>
        </AppBar>
        <div className={styles.content}>{content}</div>
        <div className={styles.footer} my={4}>
          {BID_OPTIONS.map((bid, index) => (
            <Fab
              key={index}
              color="primary"
              disabled={lastStepWasMe}
              aria-label={bid.title}
              onClick={() => {
                this.socket.emit("nextBid", bid.value);
              }}
            >
              {bid.value}
            </Fab>
          ))}
        </div>
        {this.props.gameState === "ended" && (
          <Result
            reset={() => this.socket.emit("startGame")}
            success={lastStepWasMe}
          />
        )}
      </div>
    );
  }
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
