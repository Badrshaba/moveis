import React, { useRef, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getSearchResults } from '../system/SearchSlide';

const Haeder = () => {
const search = useRef()
const dic = useDispatch()
const {SearchResults}=useSelector(e=>e.SearchPage)
const searchResults=(e)=>{
  e.preventDefault()
  dic(getSearchResults(search.current.value))
}
console.log(SearchResults);
  return (
    <div className=' sticky-top'>
         <Navbar bg="dark" variant="dark"  expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to={"/"}>React movies</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
            <Nav.Link as={Link} to={"/movies"}>Movies</Nav.Link>
            <Nav.Link as={Link} to={"/series"}>Series</Nav.Link>
            
          </Nav>
          <Form className="d-flex" >
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 position-relative"
              aria-label="Search"
              onKeyUp={searchResults}
              ref={search}

            />
            <div className=' position-absolute top-100 bg-white divsearch'>
              {SearchResults.map((SearchResult)=>(<div  as={Link} to={`/movies/details/${SearchResult.id}`} className='  border'><h5>{SearchResult.name}</h5></div>))}
            </div>
            <Button variant="outline-success">Search</Button>
            <Button className=' ms-1'  variant="outline-primary">Login</Button>{' '}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Haeder