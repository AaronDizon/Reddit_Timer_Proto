import { SearchContext } from '../context/SearchContext'
import styles from '../Styling/Info.module.css'
import {React, useState, useContext, useEffect, useRef } from 'react'
import { select } from 'd3'



const Heatmap = () => {

  const data = [25, 45, 60]
  const svgRef = useRef()

  const w = 400
  const h = 400

  useEffect(()=> {
      
    const svg = select(svgRef.current)
      .attr("width", w)
      .attr("height", h)
    svg
      .selectAll("circle")
      .data(data)
      .join("circle")
      .attr("r", value => value)
      .attr("cx", value => value *2)
      .attr("cy", value => value *2)
      .attr("stroke", "red");

  }, [])

  return (
    <div>
      Heatmap
      <svg ref={svgRef}> </svg>
    </div>
  )
}

export default Heatmap