import Footer from "../../molecules/Footer/Footer"
import ImgTitle from "../../molecules/ImgTitle/ImgTitle"
import HeaderComp from "../../organims/HeaderComp/HeaderComp"
import ProyecBar from "../../organims/ProyecBar/ProyecBar"
import styles from "./HomeTemplate.module.css"
function HomeTemplate() {
  return (
    <div className={styles.HomeTemplate}>
      <HeaderComp/>
      <ImgTitle/>
      <ProyecBar/>
      <Footer/>
    </div>
  )
}

export default HomeTemplate
