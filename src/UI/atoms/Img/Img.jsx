import styles from "./Img.module.css"
function Img({path, customClass}) {
  return (
  <img src={path} className={`${styles.Img} ${customClass}`}/>
    )
}

export default Img
