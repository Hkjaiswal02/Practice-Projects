import styles from "./Button.module.css";
function Button({ text, icon, isOutline }) {
  return (
    <button className={isOutline ? styles.Outline_btn : styles.primary_btn}>
      {icon}
      {text}
    </button>
  );
}

export default Button;
