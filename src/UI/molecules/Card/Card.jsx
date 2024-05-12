import React from 'react'
import styles from "./Card.module.css" 
import Img from '../../atoms/Img/Img'
import Parrafo from '../../atoms/Parrafo/Parrafo'


function Card({}) {
  return (
    <div className={styles.Card}>
      <Img path={"./Logo.svg"} customClass={styles.Card__Img}/>
      <Parrafo customClass={styles.Card__Parrafo} text="Proyecto #1"/>
    </div>
  )
}

export default Card
