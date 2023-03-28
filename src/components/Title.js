import {React, useContext } from 'react';
import { SearchContext } from '../context/SearchContext'
import styles from '../Styling/Title.module.css'

const Title = () => {

  const {infoSearchStatusState, descriptionState, loadedState, errorState, dataState} = useContext(SearchContext)
      const [infoSearchStatus, setInfoSearchStatus,] = infoSearchStatusState
      const [description, setDescription] = descriptionState
      const [loaded, setLoaded] = loadedState
      const [error, setError] = errorState
      const [data, setData] = dataState

  const reset = () => {
    setInfoSearchStatus(false)
    setDescription('')
    setLoaded(false)
    setError(false)
    setData([])
  }

  return (
    <div className={styles.title} onClick={reset}>Reddit Timer</div>
  )
}

export default Title