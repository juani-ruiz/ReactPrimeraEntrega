import React from 'react'
import { Card, Image, Icon, Button} from 'semantic-ui-react'
import ItemCount from '../../components/ItemCount/ItemCount';
import './ItemDetail.css'

import {Link} from 'react-router-dom';

const ItemDetail = ({ data }) => {
  
  return (
    
        <div>
          <Card style={{ width: 200 }} key={data.char_id}>
            <Image src={data.img} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{data.name}</Card.Header>
              <Card.Meta>
                <span className='date'>{data.birthday}</span>
              </Card.Meta>
              <Card.Description>Status: {data.status}</Card.Description>
            </Card.Content>
            
            <Link to={`/detail/${data.char_id}`}>            
              <Button primary>
                 <Icon name='search' />ver
              </Button>            
            </Link>

            <br />             

            <ItemCount />

          </Card>
        </div>

    )

}




export default ItemDetail