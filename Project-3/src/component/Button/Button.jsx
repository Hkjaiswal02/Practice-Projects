import { useContext } from "react";
import styles from "./Button.module.css";
function Button({ text, isOutline, onClick }) {
  return (
    <button
      className={isOutline ? styles.Outline_btn : styles.primary_btn}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
