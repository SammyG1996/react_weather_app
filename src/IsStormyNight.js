import React from "react";
import './IsStormyNight.css'
import WeatherCard from "./WeatherCard";

//this is a simple child component. Its sets the backround theme using CSS
function IsStormyNight(props){

  return(
    <div className="IsStormyNight">
      {/* Then the wether card is called with the AJAX object passed to it */}
      <WeatherCard currCondition={props.currCondition}/>
    </div>
  )
}

export default IsStormyNight