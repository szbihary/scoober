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
import Menu from "../menu/Menu";
import { BID_OPTIONS } from "../../config";
import { getRandomInt } from "../../utils/Utils";
import { RANDOM_INT_MIN, RANDOM_INT_MAX } from "../../config";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.socket = props.socket;
  }

  componentDidMount() {
    this.socket.on("resetGame", () => this.props.actions.resetGame());

    this.socket.on("nextRound", (round) => {
      const player = round.player === this.socket.id ? "me" : "opponent";
      const nextStep = { value: round.value, player };
      this.props.actions.nextRound(nextStep);
    });
  }

  render() {
    const lastStep = this.props.steps[this.props.steps.length - 1];
    const lastStepWasMe = lastStep && lastStep.player === "me";
    const content =
      this.props.steps.length === 0 ? (
        <Menu
          handleStartGameClick={() => {
            const initialNumber = getRandomInt(RANDOM_INT_MIN, RANDOM_INT_MAX);
            this.socket.emit("nextBid", initialNumber);
          }}
        />
      ) : (
        <>
          <ChatLayout steps={this.props.steps} />
          <div className={styles.footer} my={4}>
            {BID_OPTIONS.map((bid, index) => (
              <Fab
                key={index}
                color="primary"
                disabled={lastStepWasMe}
                aria-label={bid.title}
                onClick={() => this.socket.emit("nextBid", bid.value)}
              >
                {bid.value > 0 ? `+${bid.value}` : bid.value}
              </Fab>
            ))}
          </div>
        </>
      );

    return (
      <div className={styles.container}>
        <AppBar className={styles.header}>
          <Typography variant="h5">Scoober team</Typography>
          <Typography variant="subtitle1">
            Win the game or win the job
          </Typography>
        </AppBar>
        <div className={styles.content}>{content}</div>
        {this.props.gameState === "ended" && (
          <Result
            reset={() => this.socket.emit("resetGame")}
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
    gameState: state.gameState,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionCreators, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
