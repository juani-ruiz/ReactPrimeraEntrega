import React, { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';
import { List } from 'semantic-ui-react'

const CartList = () => {

    const [cart, setCart] = useContext(CartContext);

    console.log(cart);
        return (
            <div>
                <h2>Lista de Productos:</h2>  
                    {cart.map((car) => {
                        return (          
                        
                            <List divided relaxed>
                            <List.Item key={car.id}>
                             
                              <List.Content>
                                <List.Header as='a'>{car.title}</List.Header>
                                <List.Description as='a'>{car.price}</List.Description>
                                <List.Description as='a'>{car.description}</List.Description>
                              </List.Content>
                             
                            </List.Item>
                            
                           
                          </List>
                        )
                    })}
                       
            </div>
        )
                }

export default CartList;