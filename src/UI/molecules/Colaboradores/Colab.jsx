import React from 'react'
import Img from '../../atoms/Img/Img'
import Span from '../../atoms/Span/Span'
import styles from "./Colab.module.css"
function Colab({customClass, text, textProfile}) {
  return (
    <div className={`${styles.Colab} ${customClass}`}>
    <Img path="./Profile.svg" customClass={styles.Colab__Img}/>
    <div className={styles.Colab__Spans}>
     <Span text={text}/>
     <Span text={textProfile} customClass={styles.Colab__SpansDescrip}/>
    </div>
    </div>
  )
}

export default Colab
