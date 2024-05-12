import React from 'react'
import Img from '../../atoms/Img/Img'
import Parrafo from '../../atoms/Parrafo/Parrafo'
import styles from "./ImgTitle.module.css"
import { NavLink } from 'react-router-dom'

function ImgTitle() {
  return (
    <div className={styles.ImgTitle}>
    <NavLink to="/Sobre">
    <Img customClass={styles.ImgTitle__Img} path="./Logo.svg"/>
    </NavLink>
    <Parrafo text="Bienvenid@, soy delta un programador anonimo dedicado al fronend de desarrollo web." customClass={styles.ImgTitle__Parrafo} />
    </div>
  )
}

export default ImgTitle
