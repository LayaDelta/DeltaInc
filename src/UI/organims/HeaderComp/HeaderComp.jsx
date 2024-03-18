import React from 'react'
import HeaderLogo from '../../molecules/HeaderLogo/HeaderLogo'
import ColumRigth from '../../molecules/ColumnaDerecha/ColumRigth'
import styles from "./HeaderComp.module.css"

function HeaderComp({customClass}) {
  return (
    <>
    <div className={`${styles.HeaderComp} ${customClass}`} >
      <HeaderLogo/>
      <ColumRigth/>
    </div>

    </>
  )
}

export default HeaderComp
