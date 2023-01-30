import { SearchContext } from '../context/SearchContext'
import styles from '../Styling/Info.module.css'
import {React, useState, useContext, useEffect } from 'react'

const Info = (props) => {

    const {infoSearchedState} = useContext(SearchContext)
    const [ infoSearched, setInfoSearched] = infoSearchedState

    const [data, setData] = useState(props.data)
    const [parsedData, setParsedData] = useState()

    const chartObject = {

      sunZeroToOneHundred: [],
      sunOneToTwoHundred: [],
      sunTwoToThreeHundred: [],
      sunThreeToFourHundred: [],
      sunFourToFiveHundred: [],
      sunFiveToSixHundred: [],
      sunSixToSevenHundred: [],
      sunSevenToEightHundred: [],
      sunEightToNineHundred: [],
      sunNineToTenHundred: [],
      sunTenToElevenHundred: [],
      sunElevenToTwelveHundred: [],
      sunTwelveToThirteenHundred: [],
      sunThirteenToFourteenHundred: [],
      sunFourteenToFifteenHundred: [],
      sunFifteenToSixteenHundred: [],
      sunSixteenToSeventeenHundred: [],
      sunSeventeenToEighteenHundred: [],
      sunEighteenToNineteenHundred: [],
      sunNineteenToTwentyHundred: [],
      sunTwentyToTwentyoneHundred: [],
      sunTwentyoneToTwentytwoHundred: [],
      sunTwentytwoToTwentythreeHundred: [],
      sunTwentythreeToTwentyfourHundred: [],

     
      monZeroToOneHundred: [],
      monOneToTwoHundred: [],
      monTwoToThreeHundred: [],
      monThreeToFourHundred: [],
      monFourToFiveHundred: [],
      monFiveToSixHundred: [],
      monSixToSevenHundred: [],
      monSevenToEightHundred: [],
      monEightToNineHundred: [],
      monNineToTenHundred: [],
      monTenToElevenHundred: [],
      monElevenToTwelveHundred: [],
      monTwelveToThirteenHundred: [],
      monThirteenToFourteenHundred: [],
      monFourteenToFifteenHundred: [],
      monFifteenToSixteenHundred: [],
      monSixteenToSeventeenHundred: [],
      monSeventeenToEighteenHundred: [],
      monEighteenToNineteenHundred: [],
      monNineteenToTwentyHundred: [],
      monTwentyToTwentyoneHundred: [],
      monTwentyoneToTwentytwoHundred: [],
      monTwentytwoToTwentythreeHundred: [],
      monTwentythreeToTwentyfourHundred: [],

     
      tueZeroToOneHundred: [],
      tueOneToTwoHundred: [],
      tueTwoToThreeHundred: [],
      tueThreeToFourHundred: [],
      tueFourToFiveHundred: [],
      tueFiveToSixHundred: [],
      tueSixToSevenHundred: [],
      tueSevenToEightHundred: [],
      tueEightToNineHundred: [],
      tueNineToTenHundred: [],
      tueTenToElevenHundred: [],
      tueElevenToTwelveHundred: [],
      tueTwelveToThirteenHundred: [],
      tueThirteenToFourteenHundred: [],
      tueFourteenToFifteenHundred: [],
      tueFifteenToSixteenHundred: [],
      tueSixteenToSeventeenHundred: [],
      tueSeventeenToEighteenHundred: [],
      tueEighteenToNineteenHundred: [],
      tueNineteenToTwentyHundred: [],
      tueTwentyToTwentyoneHundred: [],
      tueTwentyoneToTwentytwoHundred: [],
      tueTwentytwoToTwentythreeHundred: [],
      tueTwentythreeToTwentyfourHundred: [],

     
      wedZeroToOneHundred: [],
      wedOneToTwoHundred: [],
      wedTwoToThreeHundred: [],
      wedThreeToFourHundred: [],
      wedFourToFiveHundred: [],
      wedFiveToSixHundred: [],
      wedSixToSevenHundred: [],
      wedSevenToEightHundred: [],
      wedEightToNineHundred: [],
      wedNineToTenHundred: [],
      wedTenToElevenHundred: [],
      wedElevenToTwelveHundred: [],
      wedTwelveToThirteenHundred: [],
      wedThirteenToFourteenHundred: [],
      wedFourteenToFifteenHundred: [],
      wedFifteenToSixteenHundred: [],
      wedSixteenToSeventeenHundred: [],
      wedSeventeenToEighteenHundred: [],
      wedEighteenToNineteenHundred: [],
      wedNineteenToTwentyHundred: [],
      wedTwentyToTwentyoneHundred: [],
      wedTwentyoneToTwentytwoHundred: [],
      wedTwentytwoToTwentythreeHundred: [],
      wedTwentythreeToTwentyfourHundred: [],

     
      thuZeroToOneHundred: [],
      thuOneToTwoHundred: [],
      thuTwoToThreeHundred: [],
      thuThreeToFourHundred: [],
      thuFourToFiveHundred: [],
      thuFiveToSixHundred: [],
      thuSixToSevenHundred: [],
      thuSevenToEightHundred: [],
      thuEightToNineHundred: [],
      thuNineToTenHundred: [],
      thuTenToElevenHundred: [],
      thuElevenToTwelveHundred: [],
      thuTwelveToThirteenHundred: [],
      thuThirteenToFourteenHundred: [],
      thuFourteenToFifteenHundred: [],
      thuFifteenToSixteenHundred: [],
      thuSixteenToSeventeenHundred: [],
      thuSeventeenToEighteenHundred: [],
      thuEighteenToNineteenHundred: [],
      thuNineteenToTwentyHundred: [],
      thuTwentyToTwentyoneHundred: [],
      thuTwentyoneToTwentytwoHundred: [],
      thuTwentytwoToTwentythreeHundred: [],
      thuTwentythreeToTwentyfourHundred: [],

     
      friZeroToOneHundred: [],
      friOneToTwoHundred: [],
      friTwoToThreeHundred: [],
      friThreeToFourHundred: [],
      friFourToFiveHundred: [],
      friFiveToSixHundred: [],
      friSixToSevenHundred: [],
      friSevenToEightHundred: [],
      friEightToNineHundred: [],
      friNineToTenHundred: [],
      friTenToElevenHundred: [],
      friElevenToTwelveHundred: [],
      friTwelveToThirteenHundred: [],
      friThirteenToFourteenHundred: [],
      friFourteenToFifteenHundred: [],
      friFifteenToSixteenHundred: [],
      friSixteenToSeventeenHundred: [],
      friSeventeenToEighteenHundred: [],
      friEighteenToNineteenHundred: [],
      friNineteenToTwentyHundred: [],
      friTwentyToTwentyoneHundred: [],
      friTwentyoneToTwentytwoHundred: [],
      friTwentytwoToTwentythreeHundred: [],
      friTwentythreeToTwentyfourHundred: [],

     
      satZeroToOneHundred: [],
      satOneToTwoHundred: [],
      satTwoToThreeHundred: [],
      satThreeToFourHundred: [],
      satFourToFiveHundred: [],
      satFiveToSixHundred: [],
      satSixToSevenHundred: [],
      satSevenToEightHundred: [],
      satEightToNineHundred: [],
      satNineToTenHundred: [],
      satTenToElevenHundred: [],
      satElevenToTwelveHundred: [],
      satTwelveToThirteenHundred: [],
      satThirteenToFourteenHundred: [],
      satFourteenToFifteenHundred: [],
      satFifteenToSixteenHundred: [],
      satSixteenToSeventeenHundred: [],
      satSeventeenToEighteenHundred: [],
      satEighteenToNineteenHundred: [],
      satNineteenToTwentyHundred: [],
      satTwentyToTwentyoneHundred: [],
      satTwentyoneToTwentytwoHundred: [],
      satTwentytwoToTwentythreeHundred: [],
      satTwentythreeToTwentyfourHundred: []


    }
    let keys = []
    let values = []
    let enteries = [] 

    useEffect(()=> {
      //console.log(values)
      parseData(data)
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
      console.log(values)
      createSeries(values)
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

      
      if (param >= 0 && param < 1){
        let timeGap = "ZeroToOneHundred"
        return timeGap
      }
      else if (param >= 1 && param < 2){
        let timeGap = "OneToTwoHundred"
        return timeGap
      }
      else if (param >= 2 && param < 3){
        let timeGap = "TwoToThreeHundred"
        return timeGap
      }
      else if (param >= 3 && param < 4){
        let timeGap = "ThreeToFourHundred"
        return timeGap
      }
      else if (param >= 4 && param < 5){
        let timeGap = "FourToFiveHundred"
        return timeGap
      }
      else if (param >= 5 && param < 6){
        let timeGap = "FiveToSixHundred"
        return timeGap
      }
      else if (param >= 6 && param < 7){
        let timeGap = "SixToSevenHundred"
        return timeGap
      }
      else if (param >= 7 && param < 8){
        let timeGap = "SevenToEightHundred"
        return timeGap
      }
      else if (param >= 8 && param < 9){
        let timeGap = "EightToNineHundred"
        return timeGap
      }
      else if (param >= 9 && param < 10){
        let timeGap = "NineToTenHundred"
        return timeGap
      }
      else if (param >= 10 && param < 11){
        let timeGap = "TenToElevenHundred"
        return timeGap
      }
      else if (param >= 11 && param <12){
        let timeGap = "ElevenToTwelveHundred"
        return timeGap
      }
      else if (param >= 12 && param <13){
        let timeGap = "TwelveToThirteenHundred"
        return timeGap
      }
      else if (param >= 13 && param <14){
        let timeGap = "ThirteenToFourteenHundred"
        return timeGap
      }
      else if (param >= 14 && param <15){
        let timeGap = "FourteenToFifteenHundred"
        return timeGap
      }
      else if (param >= 15 && param <16){
        let timeGap = "FifteenToSixteenHundred"
        return timeGap
      }
      else if (param >= 16 && param <17){
        let timeGap = "SixteenToSeventeenHundred"
        return timeGap
      }
      else if (param >= 17 && param <18){
        let timeGap = "SeventeenToEighteenHundred"
        return timeGap
      }
      else if (param >= 18 && param <19){
        let timeGap = "EighteenToNineteenHundred"
        return timeGap
      }
      else if (param >= 19 && param <20){
        let timeGap = "NineteenToTwentyHundred"
        return timeGap
      }
      else if (param >= 20 && param <21){
        let timeGap = "TwentyToTwentyoneHundred"
        return timeGap
      }
      else if (param >= 21 && param <22){
        let timeGap = "TwentyoneToTwentytwoHundred"
        return timeGap
      }
      else if (param >= 22 && param <23){
        let timeGap = "TwentytwoToTwentythreeHundred"
        return timeGap
      }
      else if (param >= 23 && param <24){
        let timeGap = "TwentythreeToTwentyfourHundred"
        return timeGap
      }
    }

    // function that will create the object for each time slot and sort the data respectively
    const parseData = (param) => {
 
      for (let i = 0; i < 300; ++i) {
      
        let tempDay = getDay(param[i])
  
        let tempTime = getHours(param[i])


        
        let timeGap = getTimeGap(tempTime)
        

        let postTime = tempDay + timeGap
      
        chartObject[`${postTime}`].push(param[i])
       
      }

      setParsedData(chartObject)
  

      //  values= Object.values(chartObject)
      //  values.forEach(element => console.log(typeof element.length))

      values= chartObject

    }

    //function to set values object as an array for data for highcharts

    const createSeries = (param) => {
      let objectArray = Object.entries(param)
      console.log(objectArray.length)
      let newSeries = []
        for (let i = 0; i < objectArray.length; ++i){
          let tempTime
          let tempDay
          let tempCount

          let tempEntry
          //console.log(objectArray[i])
          let tempArray = objectArray[i]
          for (let j = 0; j < tempArray.length; ++j){
            //console.log(typeof tempArray[j])
            if (typeof tempArray[j] === 'string') {
              let tempDay = tempArray[j].slice(0,3)
              let tempTime = tempArray[j].slice(3)
              console.log(tempTime, tempDay)
            } else {
              tempCount = j.length
            }
          }
        }
    }

      let dummyData= [1, 2, 3, 4]
    // console.log(values)
  return (
    <div className={styles.infoContainer}>
          {/* {dummyData.map((count, i) => (
            
              <h1>Hello</h1>
              
            ))} */}
      <p>Info</p>
    </div>
  )
}

export default Info