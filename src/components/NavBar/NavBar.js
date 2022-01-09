import {NavLink} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
// import logo from '../../IMG/logo.jpg'
import Nav from 'react-bootstrap/Nav'
import './NavBar.css';
import CartWidget from './CartWidget';


function NavBar () {
    return (
        <Navbar>
        <Container fluid>
          <Nav>
            <NavLink className="navLink" to="/"><img
                                                       alt="logo"
                                                       src={'https://res.cloudinary.com/janfis/image/upload/v1639865062/React%20JS%20-%20e%20commerce/logo_q8crhx.jpg'}
                                                       width="30"
                                                       height="30"
                                                       className="d-inline-block align-top"
                                                   />
                                                   Al Aire!
            </NavLink>
            <NavLink to="/categoria/cerveza" className="navLink" activeclassname="active">Cerveza</NavLink>
            <NavLink to="/categoria/vino" className="navLink" activeclassname="active">Vino</NavLink>
            <NavLink to="/categoria/sin_alcohol" className="navLink" activeclassname="active">Sin Alcohol</NavLink>
                          
            </Nav>
             <NavLink to="/cart" className="navLink"><CartWidget/></NavLink>
           
       
        </Container>
      </Navbar>
    )
}
export default NavBar;


