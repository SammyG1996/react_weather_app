import React from "react";
import './IsSnowyNight.css';
import WeatherCard from "./WeatherCard";

//this is a simple child component. Its sets the backround theme using CSS
function IsSnowyNight(props){

  return(
    <div className="IsSnowyNight">
      {/* Then the wether card is called with the AJAX object passed to it */}
      <WeatherCard currCondition={props.currCondition} isDay={props.isDay}/>
    </div>
  )
}

export default IsSnowyNight