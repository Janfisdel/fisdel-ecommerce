import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import './Item.css'
import Button from '../Button/Button'

function Item({prod}) {
    return (
        <div key={prod.id}>
            <Card>
                    <Card.Img className='imgSize' variant="top" src={prod.img} />
                    <Card.Body>
                             <Card.Title>
                                 {prod.name}
                             </Card.Title>
                             <Card.Text>
                                <Link to={`/detail/${prod.id}`}>    
                                    <Button text='Detalle de producto' />
                                </Link>
                             </Card.Text>
                    </Card.Body>
                    <ListGroup className='list-group-flush'>
                            <ListGroupItem>
                                $ {prod.price}
                            </ListGroupItem>
                    </ListGroup>
                                                            
            </Card>
        </div>
    )
}

export default Item
