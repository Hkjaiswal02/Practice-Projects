import Button from "../Button/Button";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={styles.container}>
      <div>
        <img src="../../Image/diceHome.png" alt="" />
      </div>
      <div className={styles.titleBox}>
        <h1>Dice Game</h1>
        <div>
          <Button text="Play Now" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
