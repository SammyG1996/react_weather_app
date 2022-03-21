import React from "react";
import { Card, Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Image } from "react-bootstrap";
import sunnyDay from './imgs/weather-icons/sunny.png';
import sunnyNight from './imgs/weather-icons/moon.png';
import snowy from './imgs/weather-icons/snowflake.png';
import rainy from './imgs/weather-icons/rain.png'


//This function is used by IsSunny, IsSnowy, and IsStormy to display the weather information
//This is where all the data from API is placed into the application and displayed. 
function WeatherCard(props){
  const condition = props.currCondition;
  return(
  
    <div>
    <Container>




      <Row>
        <Col xs={4} lg={1}></Col>
        {/* This bellow will decide which image is displayed */}
        <Col> 
          {props.isSunny && <Image src={sunnyDay} className='mt-5' fluid/>}
          {props.isSnowy && <Image src={snowy} className='mt-5' fluid/> }
          {props.isStormy && <Image src={rainy} className='mt-5' fluid/> }
        </Col>
        
        <Col xs={4} lg={9}></Col>
      </Row>







      <Row>

        <Col xs={1} lg={3}></Col>

        <Col>
         
          <Card className="text-center mt-3">
            <Card.Header>{condition.data.location.name} {condition.data.location.region}, {condition.data.location.country}</Card.Header>
            <Card.Body>
              <Card.Title>Hello! Today it's <b>{condition.data.current.temp_f}{'\u00b0'}F</b> and {condition.data.current.condition.text}</Card.Title>
              <Card.Text>
                Winds are {condition.data.current.wind_dir} at <b>{condition.data.current.wind_mph}mph</b> and Wind Gusts are <b>{condition.data.current.gust_mph}mph</b>. 
              </Card.Text>
              <Card.Text>
                It feels like its <b>{condition.data.current.feelslike_f}{'\u00b0'}F</b>.
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">Last Updated {condition.data.current.last_updated}</Card.Footer>
          </Card>
        </Col>

        <Col xs={1} lg={2}></Col>

      </Row>
    </Container>
    </div>
  )
}

export default WeatherCard