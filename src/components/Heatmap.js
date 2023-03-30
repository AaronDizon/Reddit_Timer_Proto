import { SearchContext } from '../context/SearchContext'
import styles from '../Styling/Heatmap.module.css'
import {React, useState, useContext, useEffect, useRef } from 'react'
import * as d3 from 'd3'




const Heatmap = (props) => {

  const svgRef = useRef()

  const [mapData, setMapData] = useState(props.heatmapData)
  const [dayTip, setDayTip] = useState('')
  const [timeTip, setTimeTip] = useState()
  const [countTip, setCountTip] = useState()

  useEffect(()=> {
    
    console.log(mapData)

    const days = ["SAT", "FRI", "THU", "WED", "TUE", "MON", "SUN"]
    const hours = ["0000-0100","0100-0200","0100-0200","0200-0300","0300-0400","0400-0500","0500-0600","0600-0700","0700-0800","0800-0900","0900-1000","1000-1100","1100-1200","1200-1300","1300-1400","1400-1500","1500-1600","1600-1700","1700-1800","1800-1900","1900-2000","2000-2100","2100-2200","2200-2300","2300-2400"]
      
    
    const width = 900
    const height = 300 
  

    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .style("background", "#d3d3d3")
      .style("margin-top", "50")
      .style("overflow", "visible")

    // Build X scales and axis:
    const x = d3.scaleBand()
      .range([ 0, width ])
      .domain(hours)
      .padding(0.01);
    svg.append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(x))  
      .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", ".15em")
        .attr("transform", "rotate(-65)");

    //Build Y scales and axis: 
    const y = d3.scaleBand()
      .range([height, 0])
      .domain(days)
      .padding(0.01);
    svg.append("g")
      .call(d3.axisLeft(y))

      // create a tooltip
    const tooltip = d3.select(svgRef.current)
      .append("div")
      .style("opacity", 0)
      .attr("class", "tooltip")
      .style("background-color", "white")
      .style("border", "solid")
      .style("border-width", "2px")
      .style("border-radius", "5px")
      .style("padding", "5px")

    // Three function that change the tooltip when user hover / move / leave a cell
    const mouseover = function(event, d) {
      // tooltip.style("opacity", 1)
      setDayTip(d.day)
      setTimeTip(d.time)
      setCountTip(d.count)
    }
    const mousemove = function(event, d) {
      tooltip
        .html("The exact value of<br>this cell is: " + d.count)
        .style("left", (event.x)/2 + "px")
        .style("top", (event.y)/2 + "px")
    }
    const mouseleave = function(d) {
      // tooltip.style("opacity", 0)
      setDayTip('')
      setTimeTip('')
      setCountTip('')
    }

    const click = function(d) {
      setDayTip(d.day)
      setTimeTip(d.time)
      setCountTip(d.count)
      console.log("click occured", d.day)
    }

    // Build color scale
    var myColor = d3.scaleLinear()
      .range(["white", "#FF5700"])
      .domain([1,10])

    svg.selectAll()
      .data(mapData, function(d) {return d.time+':'+d.day;})
      .enter()
      .append("rect")
        .attr("x", function(d) { return x(d.time) })
        .attr("y", function(d) { return y(d.day) })
        .attr("width", x.bandwidth() )
        .attr("height", y.bandwidth() )
        .style("fill", function(d) { return myColor(d.count)} )
      .on("mouseover", mouseover)
      .on("mousemove", mousemove)
      .on("mouseleave", mouseleave)
      // .on("click", click)

  }, [])

  return (
    <div className={styles.container}>
      <div id="my_dataviz">
        <svg ref={svgRef}></svg>
        {dayTip === '' ? <p></p> :
        <div className={styles.toolTip}>
          <div className={styles.tipContainer}>
            <p> Day: {dayTip}</p>
            <p >Time of Day: {timeTip}</p>
            <p>Number of Posts: {countTip}</p>
          </div>
        </div>
        }
      </div>
    </div>
  )
}

export default Heatmap