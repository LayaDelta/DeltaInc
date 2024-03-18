import Button from "../../atoms/Button/Button"
import Img from "../../atoms/Img/Img"
import ColumRigth from "../ColumnaDerecha/ColumRigth"
import styles from "./HeaderLogo.module.css"

function HeaderLogo({customClass}) {
  return (
    <div className={`${styles.HeaderLogo} ${customClass}`}>
      <Img path="/Logo.svg" customClass={styles.HeaderLogo__Img}/>
      <Button text="Acerca de mi"/>
      <Button text="Contactame"/>
      <Button text="Comentarios"/>
    </div>
  )
}

export default HeaderLogo
