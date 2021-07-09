import React from 'react'
import { Card, Image, Divider } from 'semantic-ui-react'

import {Link} from 'react-router-dom';

const ItemList = ({prop}) => (

    
<Link to={`/detail/${prop.id}`}> 
    <Card fluid >     

                    <Card.Content>
                        <Image
                            as='a'               
                            floated='center'
                            size='tiny'
                            src= { prop.titulo }
                        />
                        <Card.Header>
                            <a href="/">{ prop.precio }</a>
                        </Card.Header>
                        
                        <Card.Header>
                            { prop.descripcion }    
                        </Card.Header>

                        <Divider clearing />

                        <Card.Header active>
                            Status : 
                        </Card.Header>

                       
                    </Card.Content>

                </Card>  
</Link>
)

export default ItemList