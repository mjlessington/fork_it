import React, { Component } from 'react'
import {Container, Card, Button, NavProps, Navbar} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  
  
  render() {
    return (
      <body>
         

        
          <Container>
          <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
        </Container>

        <button onclick="myFunction()">Toggle dark mode</button>
      </body>
      
    )
  }
}
