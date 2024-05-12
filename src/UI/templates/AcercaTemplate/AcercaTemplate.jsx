import Footer from "../../molecules/Footer/Footer"
import HeaderComp from "../../organims/HeaderComp/HeaderComp"
import styles from "./AcercaTemplate.module.css"
function AcercaTemplate() {
  return (
    <div className={styles.HomeTemplate}>
      <HeaderComp/>
      <Footer/>
    </div>
  )
}

export default AcercaTemplate