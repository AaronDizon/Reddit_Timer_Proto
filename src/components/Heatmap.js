import { SearchContext } from '../context/SearchContext'
import styles from '../Styling/Info.module.css'
import {React, useState, useContext, useEffect, useRef } from 'react'
import * as d3 from 'd3'
import { scaleLinear } from 'd3'



const Heatmap = (props) => {

  const data = [25, 45, 60]
  const svgRef = useRef()

  const [testData] = useState([25, 50, 35, 15, 94, 10])
  const [mapData] = useState(props.heatmapData)


  useEffect(()=> {
    
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
    const tooltip = d3.select("#my_dataviz")
      .append("div")
      .style("opacity", 0)
      .attr("class", "tooltip")
      .style("background-color", "white")
      .style("border", "solid")
      .style("border-width", "2px")
      .style("border-radius", "5px")
      .style("padding", "5px")

    // Three function that change the tooltip when user hover / move / leave a cell
    const mouseover = function(event,d) {
      tooltip.style("opacity", 1)
    }
    const mousemove = function(event,d) {
      tooltip
        .html("The exact value of<br>this cell is: " + d.value)
        .style("left", (event.x)/2 + "px")
        .style("top", (event.y)/2 + "px")
    }
    const mouseleave = function(d) {
      tooltip.style("opacity", 0)
    }

  }, [])

  return (
    <div>
      <svg ref={svgRef}>
      </svg>
    </div>
  )
}

export default Heatmap