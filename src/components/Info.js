import {React, useState, useContext, useEffect } from 'react'
import { SearchContext } from '../context/SearchContext'
import styles from '../Styling/Info.module.css'

const Info = (props) => {

    const {infoSearchedState} = useContext(SearchContext)
    const [ infoSearched, setInfoSearched] = infoSearchedState

    const [data, setData] = useState(props.data)
    const [parsedData, setParsedData] = useState()

    const chartObject = {

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
      sunTwentytwoToTwentyfourHundred: [],

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
      monTwentytwoToTwentyfourHundred: [],

      tueZeroToTwoHundred: [],
      tueTwoToFourHundred: [],
      tueFourToSixHundred: [],
      tueSixToEightHundred: [],
      tueEightToTenHundred: [],
      tueTenToTwelveHundred: [],
      tueTwelveToFourteenHundred: [],
      tueFourteenToSixteenHundred: [],
      tueSixteenToEighteenHundred: [],
      tueEighteenToTwentyHundred: [],
      tueTwentyToTwentytwoHundred: [],
      tueTwentytwoToTwentyfourHundred: [],

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
      wedTwentytwoToTwentyfourHundred: [],

      thuZeroToTwoHundred: [],
      thuTwoToFourHundred: [],
      thuFourToSixHundred: [],
      thuSixToEightHundred: [],
      thuEightToTenHundred: [],
      thuTenToTwelveHundred: [],
      thuTwelveToFourteenHundred: [],
      thuFourteenToSixteenHundred: [],
      thuSixteenToEighteenHundred: [],
      thuEighteenToTwentyHundred: [],
      thuTwentyToTwentytwoHundred: [],
      thuTwentytwoToTwentyfourHundred: [],

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
      friTwentytwoToTwentyfourHundred: [],

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
      satTwentytwoToTwentyfourHundred: []

    }
    let keys = []
    let values = []
    let enteries = []

    useEffect(()=> {
      console.log('before use effect', chartObject)
      // parseData(data)
      // let objectOfArrays = {}

      // objectOfArrays.subArray1 = [1, 2, 3]
      // objectOfArrays.subArray2 = [4, 5, 6]
      // objectOfArrays.subArray3 = [7, 8, 9]

      // objectOfArrays.subArray3.push(10)
      // console.log(objectOfArrays.subArray3)
      // // console.log(objectOfArrays)
      // if (objectOfArrays.subArray1) {
      //   console.log(true)
      // }
      // else {
      //   console.log(false)
      // }
      // let objLength = Object.keys(objectOfArrays)
      // console.log(objLength.length)
     

      // for (let key in objectOfArrays) {
      //   console.log(key)
      // }
      console.log('fire once')
    }, [])


    //function to get which day the post was created
    const getDay = (param) => {
      const dataTime = param.time.toString()
      //console.log(dataTime)
      const splitTime = dataTime.split("")
      //console.log(splitTime)
      const day = splitTime.splice(0,3)
      //console.log(day)
      const joinedDay = day.join("")
      //console.log(joinedDay)
      return(joinedDay.toLowerCase())
    }

    //function to get the exact time the post was created 
    const getHours = (param) => {
      const dataTime = param.time.toString()
      //console.log(dataTime)
      const splitTime = dataTime.split("")
      //console.log(splitTime)
      const time = splitTime.splice(16, 8)
      const joinedTime= time.join("")
      //console.log(joinedTime)
      return parseInt(joinedTime)
    }

    const getTimeGap = (param) => {
      if (param >= 0 && param < 2){
        let timeGap = "ZeroToTwoHundred"
        return timeGap
      }
      else if (param >= 2 && param < 4){
        let timeGap = "TwoToFourHundred"
        return timeGap
      }
      else if (param >= 4 && param < 6){
        let timeGap = "FourToSixHundred"
        return timeGap
      }
      else if (param >= 6 && param < 8){
        let timeGap = "SixToEightHundred"
        return timeGap
      }
      else if (param >= 8 && param < 10){
        let timeGap = "EightToTenHundred"
        return timeGap
      }
      else if (param >= 10 && param < 12){
        let timeGap = "TenToTwelveHundred"
        return timeGap
      }
      else if (param >= 12 && param < 14){
        let timeGap = "TwelveToFourteenHundred"
        return timeGap
      }
      else if (param >= 14 && param < 16){
        let timeGap = "FourteenToSixteenHundred"
        return timeGap
      }
      else if (param >= 16 && param < 18){
        let timeGap = "SixteenToEighteenHundred"
        return timeGap
      }
      else if (param >= 18 && param < 20){
        let timeGap = "EighteenToTwentyHundred"
        return timeGap
      }
      else if (param >= 20 && param < 22){
        let timeGap = "TwentyToTwentytwoHundred"
        return timeGap
      }
      else if (param >= 22 && param < 24){
        let timeGap = "TwentytwoToTwentyfourHundred"
        return timeGap
      }
    }

    // function that will create the object for each time slot and sort the data respectively
    console.log('chart object before the const parseData', chartObject)
    const parseData = (param) => {
      // For each iteration of the loop, 
      // for (let i = 0; i < 25; ++i) {
      //   console.log('record', i, param[i])
      //   //call the getDay function
      //   let tempDay = getDay(param[i])
      //   //call the getHour function 
      //   let tempTime = getHours(param[i])

      //   //console.log(tempDay, tempTime)
      //   //console.log(tempTime > 8)
      //   //create the time gap for the current post data
      //   let timeGap = getTimeGap(tempTime)
      //   //console.log(timeGap)

      //   //let postTime = `${tempDay} + ${timeGap}`
      //   let postTime = tempDay + timeGap
      //   //console.log(postTime)
      //  //console.log(typeof postTime)
      //  // console.log(chartObject[`${postTime}`])
      //   chartObject[`${postTime}`].push(param[i])
      //  //console.log(chartObject[`${postTime}`])
       
      // }
      console.log('after for loop chart object', chartObject)
      setParsedData(chartObject)
      //console.log(parsedData)

       values= Object.values(chartObject)
       //values.forEach(element => console.log(element.length))

    }
    console.log('chart object after the const parseData', chartObject)
    

  return (
    <div className={styles.infoContainer}>
        <p className={styles.title}>Info</p>
        {/* <p className={styles.information}>{parsedData}</p> */}
        <div className={styles.heatmapContainer}> 
          <div className={styles.row}>

          </div>
        </div>
    </div>
  )
}

export default Info