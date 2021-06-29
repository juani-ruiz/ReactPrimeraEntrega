import React from 'react'
import { Card, Image, Divider } from 'semantic-ui-react'

const ItemList = (props) => (

    

    <Card fluid >     

                    <Card.Content>
                        <Image
                            as='a'               
                            floated='center'
                            size='tiny'
                            src= { props.data.img}
                        />
                        <Card.Header>
                            <a href="/">{ props.data.name }</a>
                        </Card.Header>
                        
                        <Card.Header>
                            { props.data.birthday }    
                        </Card.Header>

                        <Divider clearing />

                        <Card.Header active>
                            Status : { props.data.status }
                        </Card.Header>

                       
                    </Card.Content>

                </Card>  
)

export default ItemList