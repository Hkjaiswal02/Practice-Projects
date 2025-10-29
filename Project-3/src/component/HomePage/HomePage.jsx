import Button from "../Button/Button";
import styles from "./HomePage.module.css";

import { ToggleContext } from "../../App";
import { useContext } from "react";

function HomePage() {
  const { isToggled, toggle } = useContext(ToggleContext);
  return (
    <div className={styles.container}>
      <div>
        <img src="../../Image/diceHome.png" alt="" />
      </div>
      <div className={styles.titleBox}>
        <h1>Dice Game</h1>
        <div>
          <Button text="Play Now" onClick={toggle} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
