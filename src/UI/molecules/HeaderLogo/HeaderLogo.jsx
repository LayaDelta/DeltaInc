import { NavLink } from "react-router-dom"
import Button from "../../atoms/Button/Button"
import Img from "../../atoms/Img/Img"
import ColumRigth from "../ColumnaDerecha/ColumRigth"
import styles from "./HeaderLogo.module.css"

function HeaderLogo({customClass}) {
  return (
    <div className={`${styles.HeaderLogo} ${customClass}`}>
      <Img path="/Logo.svg" customClass={styles.HeaderLogo__Img}/>
      <NavLink className={styles.HeaderLogo__Navlink} to="/">
      <Button text="Home"/>
      </NavLink>
      <NavLink className={styles.HeaderLogo__Navlink} to="/Sobre">
      <Button text="Contactame"/>
      </NavLink>
      <NavLink className={styles.HeaderLogo__Navlink} to="/Acerca">
      <Button text="Comentarios"/>
      </NavLink>
    </div>
  )
}

export default HeaderLogo
