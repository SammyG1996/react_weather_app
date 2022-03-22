import React from "react";
import { Card, Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Image } from "react-bootstrap";
import sunny from './imgs/weather-icons/sunny.png';
import moon from './imgs/weather-icons/moon.png';
import partlyCloudyDay from './imgs/weather-icons/partlycloudyday.png';
import partlyCloudyNight from './imgs/weather-icons/partlycloudynight.png';
import cloudyDay from './imgs/weather-icons/cloudyday.png';
import cloudyNight from './imgs/weather-icons/cloudynight.png';
import mistDay from './imgs/weather-icons/mistday.png';
import mistNight from './imgs/weather-icons/mistnight.png';
import rainDay from './imgs/weather-icons/rainday.png';
import rainNight from './imgs/weather-icons/rainnight.png';
import snow from './imgs/weather-icons/snowflake.png'
import thunderstorm from './imgs/weather-icons/thunderstorm.png'
import rain from './imgs/weather-icons/rain.png'

const weatherConditions = {
  1000: {day: sunny, night: moon}, 
  1003: {day: partlyCloudyDay, night: partlyCloudyNight}, 
  1006: {day: cloudyDay, night: cloudyNight}, 
  1009: {day: cloudyDay, night: cloudyNight}, 
  1030: {day: mistDay, night: mistNight},
  1063: {day: rainDay, night: rainNight}, 
  1066: {day: snow, night: snow},
  1069: {day: snow, night: snow},
  1072: {day: rainDay, night: rainNight}, 
  1087: {day: thunderstorm, night: thunderstorm},
  1114: {day: snow, night: snow},
  1117: {day: snow, night: snow},
  1135: {day: mistDay, night: mistNight},
  1147: {day: mistDay, night: mistNight},
  1150: {day: mistDay, night: mistNight},
  1153: {day: rainDay, night: rainNight}, 
  1168: {day: rainDay, night: rainNight}, 
  1171: {day: rainDay, night: rainNight},  
  1180: {day: rainDay, night: rainNight}, 
  1183: {day: rainDay, night: rainNight}, 
  1186: {day: rain, night: rain}, 
  1189: {day: rain, night: rain}, 
  1192: {day: rain, night: rain}, 
  1195: {day: rain, night: rain}, 
  1198: {day: rainDay, night: rainNight}, 
  1201: {day: rain, night: rain}, 
  1204: {day: rainDay, night: rainNight}, 
  1207: {day: rain, night: rain}, 
  1210: {day: snow, night: snow},
  1213: {day: snow, night: snow},
  1216: {day: snow, night: snow},
  1219: {day: snow, night: snow}, 
  1222: {day: snow, night: snow},
  1225: {day: snow, night: snow},
  1237: {day: snow, night: snow},
  1240: {day: rainDay, night: rainNight}, 
  1243: {day: rain, night: rain}, 
  1246: {day: rain, night: rain},  
  1249: {day: snow, night: snow},
  1252: {day: snow, night: snow},
  1255: {day: snow, night: snow},
  1258: {day: snow, night: snow}, 
  1261: {day: snow, night: snow},
  1264: {day: snow, night: snow},
  1273: {day: thunderstorm, night: thunderstorm},
  1276: {day: thunderstorm, night: thunderstorm},
  1279: {day: thunderstorm, night: thunderstorm},
  1282: {day: thunderstorm, night: thunderstorm},
}


//This function is used by IsSunny, IsSnowy, and IsStormy to display the weather information
//This is where all the data from API is placed into the application and displayed. 
function WeatherCard(props){
  const condition = props.currCondition;
  const conditionCodeImgs = weatherConditions[condition.data.current.condition.code];
  return(
  
    <div>
    <Container>
      <Row>
        <Col xs={4} lg={1}></Col>
        {/* This bellow will decide which image is displayed */}
        <Col> 
          {props.isDay && <Image src={conditionCodeImgs.day} className='mt-5' fluid/>}
          {!props.isDay && <Image src={conditionCodeImgs.night} className='mt-5' fluid/> }
        </Col>
        
        <Col xs={4} lg={9}></Col>
      </Row>

      <Row>
        <Col xs={1} lg={3}></Col>

        <Col>
          <Card className="text-center mt-3">
            <Card.Header>{condition.data.location.name} {condition.data.location.region}, {condition.data.location.country}</Card.Header>
            <Card.Body>
              <Card.Title>Today it's <b>{condition.data.current.temp_f}{'\u00b0'}F</b> and {condition.data.current.condition.text}</Card.Title>
              <Card.Text>
                Winds are {condition.data.current.wind_dir} at <b>{condition.data.current.wind_mph}mph</b>. 
              </Card.Text>
              <Card.Text>
               Wind Gusts are up to <b>{condition.data.current.gust_mph}mph</b>.
              </Card.Text>
              <Card.Text>
                Currently it feels like its <b>{condition.data.current.feelslike_f}{'\u00b0'}F</b>.
              </Card.Text>
              <Card.Text>
                Humidity is currently <b>{condition.data.current.humidity}</b>.
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