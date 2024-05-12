import React from 'react'
import styles from "./Footer.module.css"
import Span from '../../atoms/Span/Span'
function Footer() {
  return (
    <div className={styles.Footer}>
      <Span text="Copyright 2024 por Delta.Corp"/>
    </div>
  )
}

export default Footer
