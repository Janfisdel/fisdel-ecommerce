import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import logo from '../../logo.jpg'
import Nav from 'react-bootstrap/Nav'
import NavDropdown  from 'react-bootstrap/NavDropdown'
import './NavBar.css';
import CartWidget from './CartWidget';


function NavBar () {
    return (
        <Navbar  expand="lg">
        <Container fluid>
        <img
          alt="logo"
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
          <Navbar.Brand href="#">Al Aire!</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <NavDropdown title="Productos" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/1.1">Cerveza</NavDropdown.Item>
                <NavDropdown.Item href="#action/1.2">Vino</NavDropdown.Item>
                <NavDropdown.Item href="#action/1.3">Gaseosa</NavDropdown.Item>
          
                </NavDropdown>
              <Nav.Link href="#action2">Contacto</Nav.Link>
              
            </Nav>
            <CartWidget/>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
export default NavBar;


