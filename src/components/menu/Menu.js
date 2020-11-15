import styles from "./menu.module.css";

function Menu({ handleStartGameClick }) {
  return (
    <>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <img
          className={styles.resultImage}
          alt="scoober logo"
          src={"/image/logo_scoober.png"}
        />
        <div className={styles.resultText}>
          Start the game by generating a random number
        </div>
        <button
          className={styles.startGameButton}
          onClick={() => handleStartGameClick()}
        >
          Generate
        </button>
      </div>
    </>
  );
}

export default Menu;
