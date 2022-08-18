import {React, useState, useContext } from 'react'
import { SearchContext } from '../context/SearchContext'
import styles from '../Styling/Info.module.css'

const Info = () => {

    const {infoSearchedState} = useContext(SearchContext)
    const [ infoSearched, setInfoSearched] = infoSearchedState

  return (
    <div className={styles.infoContainer}>
        <p className={styles.title}>Info</p>
        <p className={styles.information}>{infoSearched}</p>
    </div>
  )
}

export default Info