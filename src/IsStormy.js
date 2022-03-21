import React from "react";
import './IsStormy.css'
import WeatherCard from "./WeatherCard";

//this is a simple child component. Its sets the backround theme using CSS
function IsStormy(props){

  return(
    <div className="IsStormy">
      {/* Then the wether card is called with the AJAX object passed to it */}
      <WeatherCard currCondition={props.currCondition} currCondition={props.currCondition}/>
    </div>
  )
}

export default IsStormy