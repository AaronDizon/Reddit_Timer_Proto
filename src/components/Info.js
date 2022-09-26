import {React, useState, useContext, useEffect } from 'react'
import { SearchContext } from '../context/SearchContext'
import styles from '../Styling/Info.module.css'

const Info = (props) => {

    const {infoSearchedState} = useContext(SearchContext)
    const [ infoSearched, setInfoSearched] = infoSearchedState

    const [data, setData] = useState(props.data)

    const chartObject = {
      monZeroToTwoHundred: [],
      monTwoToFourHundred: [],
      monFourToSixHundred: [],
      monSixToEightHundred: [],
      monEightToTenHundred: [],
      monTenToTwelveHundred: [],
      monTwelveToFourteenHundred: [],
      monFourteenToSixteenHundred: [],
      monSixteenToEighteenHundred: [],
      monEighteenToTwentyHundred: [],
      monTwentyToTwentytwoHundred: [],
      monTwentytwoToZeroHundred: [],

      tuesZeroToTwoHundred: [],
      tuesTwoToFourHundred: [],
      tuesFourToSixHundred: [],
      tuesSixToEightHundred: [],
      tuesEightToTenHundred: [],
      tuesTenToTwelveHundred: [],
      tuesTwelveToFourteenHundred: [],
      tuesFourteenToSixteenHundred: [],
      tuesSixteenToEighteenHundred: [],
      tuesEighteenToTwentyHundred: [],
      tuesTwentyToTwentytwoHundred: [],
      tuesTwentytwoToZeroHundred: [],

      wedZeroToTwoHundred: [],
      wedTwoToFourHundred: [],
      wedFourToSixHundred: [],
      wedSixToEightHundred: [],
      wedEightToTenHundred: [],
      wedTenToTwelveHundred: [],
      wedTwelveToFourteenHundred: [],
      wedFourteenToSixteenHundred: [],
      wedSixteenToEighteenHundred: [],
      wedEighteenToTwentyHundred: [],
      wedTwentyToTwentytwoHundred: [],
      wedTwentytwoToZeroHundred: [],

      thursZeroToTwoHundred: [],
      thursTwoToFourHundred: [],
      thursFourToSixHundred: [],
      thursSixToEightHundred: [],
      thursEightToTenHundred: [],
      thursTenToTwelveHundred: [],
      thursTwelveToFourteenHundred: [],
      thursFourteenToSixteenHundred: [],
      thursSixteenToEighteenHundred: [],
      thursEighteenToTwentyHundred: [],
      thursTwentyToTwentytwoHundred: [],
      thursTwentytwoToZeroHundred: [],

      friZeroToTwoHundred: [],
      friTwoToFourHundred: [],
      friFourToSixHundred: [],
      friSixToEightHundred: [],
      friEightToTenHundred: [],
      friTenToTwelveHundred: [],
      friTwelveToFourteenHundred: [],
      friFourteenToSixteenHundred: [],
      friSixteenToEighteenHundred: [],
      friEighteenToTwentyHundred: [],
      friTwentyToTwentytwoHundred: [],
      friTwentytwoToZeroHundred: [],

      satZeroToTwoHundred: [],
      satTwoToFourHundred: [],
      satFourToSixHundred: [],
      satSixToEightHundred: [],
      satEightToTenHundred: [],
      satTenToTwelveHundred: [],
      satTwelveToFourteenHundred: [],
      satFourteenToSixteenHundred: [],
      satSixteenToEighteenHundred: [],
      satEighteenToTwentyHundred: [],
      satTwentyToTwentytwoHundred: [],
      satTwentytwoToZeroHundred: [],

      sunZeroToTwoHundred: [],
      sunTwoToFourHundred: [],
      sunFourToSixHundred: [],
      sunSixToEightHundred: [],
      sunEightToTenHundred: [],
      sunTenToTwelveHundred: [],
      sunTwelveToFourteenHundred: [],
      sunFourteenToSixteenHundred: [],
      sunSixteenToEighteenHundred: [],
      sunEighteenToTwentyHundred: [],
      sunTwentyToTwentytwoHundred: [],
      sunTwentytwoToZeroHundred: [],

    }
    
    useEffect(()=> {
      parseData(data)
      let objectOfArrays = {}

      objectOfArrays.subArray1 = [1, 2, 3]
      objectOfArrays.subArray2 = [4, 5, 6]
      objectOfArrays.subArray3 = [7, 8, 9]

      objectOfArrays.subArray3.push(10)
      console.log(objectOfArrays.subArray3)
      // console.log(objectOfArrays)
      if (objectOfArrays.subArray1) {
        console.log(true)
      }
      else {
        console.log(false)
      }
      let objLength = Object.keys(objectOfArrays)
      console.log(objLength.length)
     

      for (let key in objectOfArrays) {
        console.log(key)
      }

    }, [])

    //function to get which day the post was created
    const getDay = (param) => {
      const dataTime = param.time.toString()
      console.log(dataTime)
      const splitTime = dataTime.split("")
      console.log(splitTime)
      const day = splitTime.splice(0,3)
      console.log(day)
      const joinedDay = day.join("")
      console.log(joinedDay)
    }

    //function to get the exact time the post was created 
    const getHours = (param) => {
      const dataTime = param.time.toString()
      //console.log(dataTime)
      const splitTime = dataTime.split("")
      //console.log(splitTime)
      const time = splitTime.splice(16, 8)
      const joinedDay= time.join("")
      console.log(joinedDay)
    }

    // function that will create the object for each time slot and sort the data respectively
    const parseData = () => {

      // For each iteration of the loop, 
      for (let i = 0; i < data.length; ++i) {
        //call the getDay function 
        getDay(data[i])
        //call the getHour function 
        getHours(data[i])
        //create a temp timegap variable for the the timestamp in which the post occurs in
        //Create an if statement that either 
        //creates a new array that the time of the post is in 
        //adds to an already existing array on the timeframe 
        // NOTE: the array timeframe will be named by the combination of the dayand the temp timegap variable
      }
      
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