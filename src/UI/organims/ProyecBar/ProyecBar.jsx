import React from 'react'
import styles from "./ProyecBar.module.css"
import Card from '../../molecules/Card/Card'

function ProyecBar() {
  return (
    <div className={styles.ProyecBar}>
      <Card Path="./logo.svg"/>
      <Card />
      <Card />
    </div>
  )
}

export default ProyecBar
