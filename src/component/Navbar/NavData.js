import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbarStyle.css'
import { Row } from 'react-bootstrap';
import { useState } from 'react';

function NavData({filterBySearch}) {
  const [searchValue,setSearchValue]=useState("")
  const Searching=(()=>{
    filterBySearch(searchValue)
    setSearchValue("")
  })
  // console.log(filterBySearch )
  return (
    <Row>
    <Navbar expand="lg" className="bg-dark text-light">
      <Container>
        <Navbar.Brand href="#" className='fs-3 navbar-Brand text-warning '> العالمي </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          
           
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="ابحث..."
              className="me-2 fs-5 text-warning"
              aria-label="Search"
              onChange={(e)=> setSearchValue(e.target.value)}
              value={searchValue}
            />
            <Button onClick={()=>Searching()} variant="outline-warning"  className="me-2">ابحث</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Row>
  );
}

export default NavData;