import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Footer from './components/Footer';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      title: 'Isaac Garza',
      headerLinks: [
        { title: 'Home', path: '/'},
        { title: 'About', path: '/aobut'},
        { title: 'Contact', path: '/contact'},
      ],
      home: {
        title: 'Be Relentless',
        subtitle: 'Projects that make a difference',
        text:'Checkout my projects below'
      },
      about: {
        title: 'About Me',
        
      },
      contact: {
        title: 'Reach Me',
        
      }
    }
  }
  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          
        <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Isaac Garza</Navbar.Brand>

            <Navbar.Toggle aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/">About</Link>
                <Link className="nav-link" to="/">Contact</Link>

              </Nav>
            </Navbar.Collapse>
          </Navbar>

          {/* <div style={{height:'100vh'}}></div> */}
          <Footer />

        </Container>

      </Router>
    
      ); 
  }
  
}

export default App;
