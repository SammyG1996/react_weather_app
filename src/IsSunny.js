import React from "react";
import './IsSunny.css'
import WeatherCard from "./WeatherCard";

//this is a simple child component. Its sets the backround theme using CSS
function IsSunny(props){

  return(
    <div className='IsSunny'>
      {/* Then the wether card is called with the AJAX object passed to it */}
        <WeatherCard currCondition={props.currCondition} currCondition={props.currCondition} isSunny={props.isSunny} isSnowy={props.isSnowy} isStormy={props.isStormy}/>
    </div>
  )
}

export default IsSunny