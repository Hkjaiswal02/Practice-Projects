import { useContext } from "react";
import styles from "./Button.module.css";
import { ToggleContext } from "../../App";
function Button({ text, isOutline }) {
  const { isToggled, toggle } = useContext(ToggleContext);
  return (
    <button
      className={isOutline ? styles.Outline_btn : styles.primary_btn}
      onClick={toggle}
    >
      {text}
    </button>
  );
}

export default Button;
