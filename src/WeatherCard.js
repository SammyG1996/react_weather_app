import React from "react";
import { Card, Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

//This function is used by IsSunny, IsSnowy, and IsStormy to display the weather information
//This is where all the data from API is placed into the application and displayed. 
function WeatherCard(props){
  const condition = props.currCondition;
  return(
  
    <div>
    <Container>
      <Row>

        <Col xs={1}></Col>

        <Col>
          <Card className="text-center mt-5">
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

        <Col xs={1}></Col>

      </Row>
    </Container>
    </div>
  )
}

export default WeatherCard