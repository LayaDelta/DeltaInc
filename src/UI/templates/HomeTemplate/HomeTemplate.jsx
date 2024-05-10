import ImgTitle from "../../molecules/ImgTitle/ImgTitle"
import HeaderComp from "../../organims/HeaderComp/HeaderComp"
import styles from "./HomeTemplate.module.css"
function HomeTemplate() {
  return (
    <div className={styles.HomeTemplate}>
      <HeaderComp/>
      <ImgTitle/>
  </div>
  )
}

export default HomeTemplate
