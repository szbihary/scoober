import styles from "./result.module.css";
import Button from "@material-ui/core/Button";

function Result({ success }) {
  const resultMessage = success ? "You won" : "You lose";
  return (
    <>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <img alt="won" src={success ? "/image/won.png" : "/image/lose.png"} />
        <div className={styles.resultText}>{resultMessage}</div>
        <button className={styles.newGameButton}>New Game</button>
      </div>
    </>
  );
}

export default Result;
