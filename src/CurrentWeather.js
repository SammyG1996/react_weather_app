import axios from "axios";
import React, {useState} from "react";
import { useEffect } from "react";
import IsSnowy from "./IsSnowy";
import IsStormy from "./IsStormy";
import IsSunny from "./IsSunny";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import './CurrentWeather.css'




function CurrentWeather(props){
  /*
  First I have 5 different states decaled: 

  isloading - contains a boolean that is used to determin when to show search results
  currCondition - contains the response from the AJAX request to the REST API
  isSunny - contains the boolean that determins if the Sunny theme should be used
  isStormy - contains the boolean that determins if the Stormy theme should be used
  isSnowy - contains the boolean that determins if the Snowy theme should be used
  */
  const [isloading, setIsLoading] = useState(true);
  const [currCondition, setCurrCondition] = useState({data: {current: { condition: {}}}})
  const [isSunny, setIsSunny] = useState(false)
  const [isStormy, setIsStormy] = useState(false)
  const [isSnowy, setIsSnowy] = useState(false)
  // These arrays split the codes that are recieved from the API in three catagories. I then use these arrays to determin which theme to displau
  const sunny = [1000, 1003]
  const snow = [1066, 1114, 1117, 1210, 1213, 1216, 1219, 1222, 1225, 1255, 1258, 1279, 1282, 1069, 1072, 1168, 1171, 1198, 1201, 1204, 1207, 1237, 1249, 1252, 1261, 1264]
  const stormy = [1030, 1063, 1150, 1153, 1180, 1183, 1186, 1189, 1192, 1195, 1240, 1243, 1246, 1135, 1147, 1087, 1273, 1276, 1006, 1009]
  //This makes the AJAX request to the Weather API if props.search (the boolean passed in from the parent) is true
  useEffect(()=>{
  if(props.search === true){
  const getData = async () => {
      try{
      console.log('trying')
      const response = await axios.get('http://api.weatherapi.com/v1/current.json', 
      {params: {key: '5b8e31f039824c07933145419222003', q: `${props.location}` }})
      //The curent condition is now set to the object sent from the API
      setCurrCondition(response)
      //The function whatsTheWeather() is called which sets the values of isSunny, isSnowy, isStormy. 
      //These values are what will determine which child component is displayed
      whatsTheWeather(response)
      //This will then hide the starter screen
      setIsLoading(false)
      }  catch(error){
        console.log(error)
      }
    }
    getData()
    //this will stop the AJAX request
    props.setSearch(false)
  }
  })
    
  
  //The function whatsTheWeather() sets the values of isSunny, isSnowy, isStormy. 
  //These values are what will determine which child component is displayed
  const whatsTheWeather = (condition) => {
    if(sunny.includes(condition.data.current.condition.code)){
      setIsSunny(true)
      setIsSnowy(false)
      setIsStormy(false)
    } else if(snow.includes(condition.data.current.condition.code)){
      setIsSnowy(true)
      setIsStormy(false)
      setIsSunny(false)
    } else if (stormy.includes(condition.data.current.condition.code)){
      setIsStormy(true)
      setIsSunny(false)
      setIsSnowy(false)
    }
  }

  return(
      //this ternary operator decides what is displayed 
      //if 'isloading' is true you get the starter screen
      isloading ? <div className='isLoading'> 
                      <Container>
                      <Row>

                        <Col xs={1}></Col>

                        <Col>
                          <Card className="text-center mt-5 p-5">
                            <Card.Body>
                              <Card.Title><b>Hello!</b></Card.Title>
                              <Card.Text>
                                Please Enter a Zip Code to Get the Weather
                              </Card.Text>
                            </Card.Body>
                          </Card>
                        </Col>

                        <Col xs={1}></Col>

                      </Row>
                    </Container>
                    </div> :
                    //If its false then you will get one of these 3 components
                    //The ones that is to be displayed is selected by short circuiting. 
                    //Whichever is 'true' is the one that will be displayed.
                    <div>
                      {isSunny && <IsSunny currCondition={currCondition}/>}
                      {isStormy && <IsStormy currCondition={currCondition}/>}
                      {isSnowy && <IsSnowy currCondition={currCondition}/>}
                    </div> 
  )
}

export default CurrentWeather