import styles from "./Span.module.css"
function Span({text, customClass}) {
  return (
    <span className={`${styles.Span} ${customClass}`}>
      {text}
    </span>
  )
}

export default Span
