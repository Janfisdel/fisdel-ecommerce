import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

function Item({prod}) {
    return (
        <div key={prod.id}><Card style={{ width: '18rem', margin:'auto' }}>
                                                            <Card.Img variant="top" src={prod.img} />
                                                            <Card.Body>
                                                                  <Card.Title>{prod.nombre}</Card.Title>
                                                                 <Card.Text>
                                                                      {prod.descripcion}
                                                                 </Card.Text>
                                                             </Card.Body>
                                                            <ListGroup className="list-group-flush">
                                                                <ListGroupItem>$ {prod.precio}</ListGroupItem>
                                                                                                                              
                                                            </ListGroup>
                                                            
                                                       </Card></div>
    )
}

export default Item
