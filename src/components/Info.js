import {React, useState, useContext } from 'react'
import { SearchContext } from '../context/SearchContext'
import styles from '../Styling/Info.module.css'

const Info = () => {
  return (
    <div className={styles.infoContainer}>
        <div className={styles.title}>Info</div>
        <p className={styles.information}>This is information</p>
    </div>
  )
}

export default Info