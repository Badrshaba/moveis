import React, { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getSearchResults } from "../system/SearchSlide";
import "./Head.css";
import { Avatar } from "@mui/material";

const Haeder = () => {
  const search = useRef();
  const dic = useDispatch();
  const { SearchResults } = useSelector((e) => e.SearchPage);
  const [show, setshow] = useState(false);
  const searchResults = (e) => {
    e.preventDefault();
    dic(getSearchResults(search.current.value));
  };
  const goDetails = useNavigate();
  const goDetailsSearch = (id) => {

    goDetails(`/movies/details/${id}`)
  };
  const unshow = () => {
    setTimeout(()=>setshow(true),500)
    
  };
  

  return (
    <div className=" sticky-top">
      <Navbar bg="dark" variant="dark" expand="lg" className="Collapse">
        <Container fluid className="Collapse">
          <Navbar.Brand onClick={unshow} as={Link} to={"/"}>
            React movies
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll"  /*className={!show&&"collapsed"} onClick={()=>{setshow(false)}} *//>
          <Navbar.Collapse id="navbarScroll" >
            {/* /**className={show&&"collapsing"} */}
            <Nav
              className="me-auto my-2 my-lg-0 collapsed"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} onClick={unshow} to={"/"}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} onClick={unshow} to={"/movies"}>
                Movies
              </Nav.Link>
              <Nav.Link as={Link} onClick={unshow} to={"/series"}>
                Series
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="text"
                placeholder="Search"
                className="me-2 position-relative"
                aria-label="Search"
                onKeyUp={searchResults}
                ref={search}
              />
              <div  className=" position-absolute top-100 bg-white divSearch  overflow-y-auto">
                {SearchResults.map((SearchResult,index) => (
                        <div onClick={()=>goDetailsSearch(SearchResult.id) } key={index} className=" divsearch border d-flex align-items-center  ">
                          <Avatar className=" me-2" alt="Remy Sharp" src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${SearchResult.backdrop_path}`}  />
                          <h5>{SearchResult.original_title}</h5>
                        </div>
                      ))
                }
                
          
              </div>
              <Button as={Link} to={"/login"} className=" ms-1" variant="outline-primary">
                Login
              </Button>{" "}
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Haeder;
