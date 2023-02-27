import { SearchContext } from '../context/SearchContext'
import styles from '../Styling/Info.module.css'
import {React, useState, useContext, useEffect } from 'react'
import {Highcharts}from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsHeatmap from 'highcharts/modules/heatmap';
import Heatmap from './Heatmap';

const Info = (props) => {

    const {infoSearchedState} = useContext(SearchContext)
    const [ infoSearched, setInfoSearched] = infoSearchedState

    const [data, setData] = useState(props.data)
    const [parsedData, setParsedData] = useState()
    const [heatmapData, setHeatmapData] = useState([])

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

    let seriesData = []

    useEffect(()=> {
      //console.log(values)
      parseData(data)

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
 
      for (let i = 0; i < 500; ++i) {
      
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
      seriesData = []
      let objectArray = Object.entries(param)
      console.log(objectArray.length)
        for (let i = 0; i < objectArray.length; ++i){
          let tempTimeSeries
          let tempDaySeries
          let tempCountSeries

          let tempEntry = []
          let tempArray = objectArray[i]
          for (let j = 0; j < tempArray.length; ++j){
            if (typeof tempArray[j] === 'string') {
              let tempDay = tempArray[j].slice(0,3)
                if (tempDay === 'sun') {
                  tempDaySeries = 0
                }else if (tempDay === 'mon'){
                  tempDaySeries = 1
                }else if (tempDay === 'tue'){
                  tempDaySeries = 2
                }else if (tempDay === 'wed'){
                  tempDaySeries = 3
                }else if (tempDay === 'thu'){
                  tempDaySeries = 4
                }else if (tempDay === 'fri'){
                  tempDaySeries = 5
                }else{
                  tempDaySeries = 6
                }
              let tempTime = tempArray[j].slice(3)
                if (tempTime === 'ZeroToOneHundred'){
                  tempTimeSeries = 0
                }else if (tempTime === 'OneToTwoHundred'){
                  tempTimeSeries = 1
                }else if (tempTime === 'TwoToThreeHundred'){
                  tempTimeSeries = 2
                }else if (tempTime === 'ThreeToFourHundred'){
                  tempTimeSeries = 3
                }else if (tempTime === 'FourToFiveHundred'){
                  tempTimeSeries = 4
                }else if (tempTime === 'FiveToSixHundred'){
                  tempTimeSeries = 5
                }else if (tempTime === 'SixToSevenHundred'){
                  tempTimeSeries = 6
                }else if (tempTime === 'SevenToEightHundred'){
                  tempTimeSeries = 7
                }else if (tempTime === 'EightToNineHundred'){
                  tempTimeSeries = 8
                }else if (tempTime === 'NineToTenHundred'){
                  tempTimeSeries = 9
                }else if (tempTime === 'TenToElevenHundred'){
                  tempTimeSeries = 10
                }else if (tempTime === 'ElevenToTwelveHundred'){
                  tempTimeSeries = 11
                }else if (tempTime === 'TwelveToThirteenHundred'){
                  tempTimeSeries = 12
                }else if (tempTime === 'ThirteenToFourteenHundred'){
                  tempTimeSeries = 13
                }else if (tempTime === 'FourteenToFifteenHundred'){
                  tempTimeSeries = 14
                }else if (tempTime === 'FifteenToSixteenHundred'){
                  tempTimeSeries = 15
                }else if (tempTime === 'SixteenToSeventeenHundred'){
                  tempTimeSeries = 16
                }else if (tempTime === 'SeventeenToEighteenHundred'){
                  tempTimeSeries = 17
                }else if (tempTime === 'EighteenToNineteenHundred'){
                  tempTimeSeries = 18
                }else if (tempTime === 'NineteenToTwentyHundred'){
                  tempTimeSeries = 19
                }else if (tempTime === 'TwentyToTwentyoneHundred'){
                  tempTimeSeries = 20
                }else if (tempTime === 'TwentyoneToTwentytwoHundred'){
                  tempTimeSeries = 21
                }else if (tempTime === 'TwentytwoToTwentythreeHundred'){
                  tempTimeSeries = 22
                }else{
                  tempTimeSeries = 23
                }
            } else {
              tempCountSeries = tempArray[j].length
              }
          }
          tempEntry.push(tempTimeSeries)
          tempEntry.push(tempDaySeries)
          tempEntry.push(tempCountSeries)
          seriesData.push(tempEntry)
        }
        console.log(seriesData)
        setHeatmapData(seriesData)

    }




  return (
    <div className={styles.infoContainer}>
          <Heatmap heatmapData={heatmapData}/>
    </div>
  )
}

export default Info