import {NavLink} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import './NavBar.css';
import CartWidget from './CartWidget';

function NavBar () {
    return (
        <Navbar>
        <Container fluid>
          <Nav>
            <NavLink className='navLink' to="/"><img 
                                                       alt="logo"
                                                       src={'https://res.cloudinary.com/janfis/image/upload/v1639865062/React%20JS%20-%20e%20commerce/logo_q8crhx.jpg'}
                                                       className='d-inline-block align-top imgLogo'
                                                   />
                                                    Al Aire!
            </NavLink>
            <NavLink to="/category/beer" className='navLink' activeclassname='active'>Cerveza</NavLink>
            <NavLink to="/category/wine" className='navLink' activeclassname='active'>Vino</NavLink>
            <NavLink to="/category/noAlcohol" className='navLink' activeclassname='active'>Sin Alcohol</NavLink>
            <NavLink to="/category/appetizer" className='navLink' activeclassname='active'>Aperitivos</NavLink>           
            <NavLink to="/category/liquor" className='navLink' activeclassname='active'>Bebidas blancas</NavLink>
            <NavLink to="/category/others" className='navLink' activeclassname='active'>Otros</NavLink>
          </Nav>
             <NavLink to="/cart" className='navLink'>
                <CartWidget/>
             </NavLink>
        </Container>
      </Navbar>
    )
}
export default NavBar;


