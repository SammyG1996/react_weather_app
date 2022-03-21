import React from "react";
import './IsSnowy.css';
import WeatherCard from "./WeatherCard";

//this is a simple child component. Its sets the backround theme using CSS
function IsSnowy(props){

  return(
    <div className="IsSnowy">
      {/* Then the wether card is called with the AJAX object passed to it */}
      <WeatherCard currCondition={props.currCondition} isSunny={props.isSunny} isSnowy={props.isSnowy} isStormy={props.isStormy}/>
    </div>
  )
}

export default IsSnowy