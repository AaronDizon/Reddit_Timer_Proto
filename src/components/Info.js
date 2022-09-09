import {React, useState, useContext, useEffect } from 'react'
import { SearchContext } from '../context/SearchContext'
import styles from '../Styling/Info.module.css'

const Info = (props) => {

    const {infoSearchedState} = useContext(SearchContext)
    const [ infoSearched, setInfoSearched] = infoSearchedState

    const [data, setData] = useState(props.data)
    
    useEffect(()=> {
      getDay()
      getHours()
    }, [])

    const getDay = () => {
      const dataTime = data.time.toString()
      console.log(dataTime)
      const splitTime = dataTime.split("")
      console.log(splitTime)
      const day = splitTime.splice(0,3)
      console.log(day)
      const joinedDay = day.join("")
      console.log(joinedDay)
    }

    const getHours = () => {
      const dataTime = data.time.toString()
      //console.log(dataTime)
      const splitTime = dataTime.split("")
      //console.log(splitTime)
      const time = splitTime.splice(16, 8)
      const joinedDay= time.join("")
      console.log(joinedDay)
    }

  return (
    <div className={styles.infoContainer}>
        <p className={styles.title}>Info</p>
        <p className={styles.information}>{infoSearched}</p>
        <div className={styles.heatmapContainer}> 
          <div className={styles.row}>

          </div>
        </div>
    </div>
  )
}

export default Info