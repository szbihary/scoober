import styles from "./result.module.css";

function Result({ success, reset }) {
  const resultMessage = success ? "You won" : "You lose";
  return (
    <>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <img alt="won" src={success ? "/image/won.png" : "/image/lose.png"} />
        <div className={styles.resultText}>{resultMessage}</div>
        <button className={styles.newGameButton} onClick={() => reset()}>
          New Game
        </button>
      </div>
    </>
  );
}

export default Result;
