import styles from "./Button.module.css"
function Button({text, customClass, onClick}) {
  return (
    <button onClick={onClick} className={`${styles.Button} ${customClass}`}>
      {text}
    </button>
  )
}

export default Button
