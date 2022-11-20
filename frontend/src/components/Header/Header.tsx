import React from "react"
import { Container, Nav, Navbar, Button } from "react-bootstrap"
import "./Header.scss"
import { Link } from "react-router-dom"

const Header: React.FC = () => {
   return (
      <Navbar bg="dark" variant="dark" className="Header" fixed="top">
         <Container>
            <Navbar.Brand as={Link} to="/" className="Header--logo">
               ExLibris
            </Navbar.Brand>
            <Nav className="me-auto">
               <Nav.Link as={Link} to="/stats" className="Header--link">
                  Metrics
               </Nav.Link>
            </Nav>
            <Nav></Nav>
            <Link to="/add-book">
               <Button className="btn btn-light" size="sm">
                  Add Book
               </Button>
            </Link>
         </Container>
      </Navbar>
   )
}

export default Header
