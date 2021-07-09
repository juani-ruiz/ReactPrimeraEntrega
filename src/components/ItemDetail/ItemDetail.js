import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import './ItemDetail.css'
import {Link} from 'react-router-dom';

const ItemDetail = ({ prop }) => {
  
  return (
    
        <div>
            <Link to={`/detail/${prop.id}`}>  
              <Card style={{ width: 200 }} key={prop.id}>
                <Image src={} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>{prop.titulo}</Card.Header>
                  <Card.Meta>
                    <span className='date'>{prop.precio}</span>
                  </Card.Meta>
                  <Card.Description>Status: {prop.descripcion}</Card.Description>
                </Card.Content>
                
                                        
              </Card> 
            </Link>
        </div>

    )

}




export default ItemDetail