import React from "react";
import './IsSunny.css'
import WeatherCard from "./WeatherCard";

//this is a simple child component. Its sets the backround theme using CSS
function IsSunny(props){

  return(
    <div className='IsSunny'>
      {/* Then the wether card is called with the AJAX object passed to it */}
        <WeatherCard currCondition={props.currCondition} isDay={props.isDay}/>
    </div>
  )
}

export default IsSunny