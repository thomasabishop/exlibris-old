import { Container, Nav, Navbar, Button } from "react-bootstrap"
import "./Header.scss"
import logo from "./logo.svg"
import { Link } from "react-router-dom"
const Header = () => {
   return (
      <Navbar  className="Header" sticky="top">
         <Container>
            <Navbar.Brand as={Link} to="/" className="Header--logo">
               <img src={logo} className="d-inline-block align-top" />
               ExLibris
            </Navbar.Brand>
            <Nav className="me-auto">
               {/* <Nav.Link as={Link} to="/stats" className="Header--link">
                  Stats
               </Nav.Link> */}
            </Nav>
            <Nav></Nav>
            <Link to="/add-book">
               <Button
                  className="mr-3 Header--button"
                  size="sm"
                  variant="outline-primary"
               >
                  Add Book
               </Button>
            </Link>
         </Container>
      </Navbar>
   )
}

export default Header
