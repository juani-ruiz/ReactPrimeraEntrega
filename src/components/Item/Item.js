import React from 'react'
import { Card, Image, Icon, Button} from 'semantic-ui-react'
import './Item.css'

const Item = ({ data }) => {
  return (
    
        <divS>
          <Card style={{ width: 200 }}>
            <Image src={data.img} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{data.name}</Card.Header>
              <Card.Meta>
                <span className='date'>{data.birthday}</span>
              </Card.Meta>
              <Card.Description>Status: {data.status}</Card.Description>
            </Card.Content>
            <Button basic color='green' floated='right'>
              <Icon color='green' name='cart' />
            </Button>
          </Card>
        </divS>

    )

}




export default Item