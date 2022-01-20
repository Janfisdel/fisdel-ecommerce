import { Link } from 'react-router-dom'
import Button from '../Button/Button'

function NotFound() {
  return(
        <div className='container'>
              <h2>ELEMENTO NO ENCONTRADO</h2>
              <Link to="/">
                  <Button text="Continuar comprando" />
              </Link>
        </div>
        ) 
}
export default NotFound;
