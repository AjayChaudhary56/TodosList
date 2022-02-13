import React from 'react';
import  {Navbar,Nav ,Container} from 'react-bootstrap';
// import { propTypes } from 'react-bootstrap/esm/Image';
import PropTypes from 'prop-types';
// import {  Link } from "react-router-dom";
export  function Header(props) {
  return      <>
  

  <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">{props.title} </Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
      {/* <Nav.Link href="#pricing">Something</Nav.Link> */}
    </Nav>
    </Container>
  </Navbar>

  
</>
  }
  Header.defaultProps={
    title: "Your Title Here"
  }
Header.propTypes={
  title:PropTypes.string
}
