// // import './WeatherForecast.css'
import React from 'react'

const WeatherCast = (props) => {
  return (
    <div className="weather">
    <h2>{props.day}</h2> 
    <img src={props.img} alt={props.imgAlt} /> 
 <p><span>conditions:{props.conditions} </span>current weather conditions</p>
<p><span>{props.time} </span>time of day</p>
</div> 
  )
}
  


export default WeatherCast



