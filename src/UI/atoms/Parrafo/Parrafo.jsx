import styles from "./Parrafo.module.css"
function Parrafo({text, customClass}) {
  return (
    <p className={`${styles.Parrafo} ${customClass}`}>
      {text}
    </p>
  )
}

export default Parrafo
