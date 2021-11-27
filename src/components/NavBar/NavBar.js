import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import './NavBar.css';


// Cambiar por NavBar con logo. ponerle las secciones deseadas para el primer desafio cambiar favicon por mi logo
const NavBar = () => {
    return (
        <Navbar bg="color" expand="lg">
        <Container fluid>
        <img
          alt="logo"
          src="public/logo.jpg"
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
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Productos</Nav.Link>
              <Nav.Link href="#action3">Contacto</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
export default NavBar;


