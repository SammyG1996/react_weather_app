
import './App.css';
import React, {useState} from 'react';
import CurrentWeather from './CurrentWeather';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Nav } from 'react-bootstrap';


function App() {
  // first I initialize 2 different states

  //The first one conatins the location that's entered in the search feild 
  //The second one in a bolean that will be used to initiate the AJAX request
  //in the child component.
  const [location, setLocation] = useState('')
  const [search, setSearch] = useState(false)

  //This function will handle the event that occurs when you submit the info in the search bar
  const handleSubmit = (e) => {
    e.preventDefault()
    setSearch(true)
  }
  return (
    <div>
      {/* Nav Bar */}
        <Navbar bg="dark" variant="dark" expand="lg">
        <Container className='m-0' fluid>
          <Navbar.Brand href="#home">
            <img
              alt="Weather Icon"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Antu_weather-clouds.svg/512px-Antu_weather-clouds.svg.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            My Weather
          </Navbar.Brand>
          <Nav> </Nav>
            {/* This is the form where you can submit the zip code */}
            <Form className="d-flex justify-content-end" onSubmit={handleSubmit}>
              <FormControl
                placeholder="Enter Zip Code"
                className="me-2"
                aria-label="Search"
                // Eveytime you type the locaton in state is changed
                onChange={(e)=> setLocation(e.target.value)}
              />
              {/* When the form is finally submitted the handlesubmit() function is called */}
              <Button variant="primary" onClick={handleSubmit}>Search</Button>
          </Form>
        </Container>
      </Navbar>

      {/* this will render all the info below the nav bar.  There are 3 different params passed in: 
      search - contains the boolean that will trigger AJAX reques 
      location - contains the information in the search bar
      setSearch - will allow you to change the boolean to stop the request*/}
      <CurrentWeather 
      search={search} 
      location={location} 
      setSearch={setSearch}/>
    </div>
  );
}

export default App;

