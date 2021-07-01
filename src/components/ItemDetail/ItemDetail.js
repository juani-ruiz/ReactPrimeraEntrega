import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import './ItemDetail.css'

import {Link} from 'react-router-dom';

const ItemDetail = ({ data }) => {
  
  return (
    
        <div>
            <Link to={`/detail/${data.char_id}`}>  
              <Card style={{ width: 200 }} key={data.char_id}>
                <Image src={data.img} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>{data.name}</Card.Header>
                  <Card.Meta>
                    <span className='date'>{data.birthday}</span>
                  </Card.Meta>
                  <Card.Description>Status: {data.status}</Card.Description>
                </Card.Content>
                
                                        
              </Card> 
            </Link>
        </div>

    )

}




export default ItemDetail