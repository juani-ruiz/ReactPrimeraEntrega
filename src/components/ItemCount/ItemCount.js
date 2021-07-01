import React, { useState } from 'react'
import './ItemCount.css';
import { Button, Icon } from 'semantic-ui-react'
import {Link} from 'react-router-dom';


function ItemCount() {  
    //estado de boton suma y resta
    const [botonActivo, setBotonActivo] = useState(true);
    

    //catidad de articulos, guarda el count
    const [cantidad, setCantidad] = useState("0");

    //console.log(cantidad);

    const onAdd = (e) => {
        setCantidad(e.target.value)  
    }

    //Suma y resta
    const [contador, setContador] = useState(0);
        
    const suma = () => {
        if(contador < 10 ){
            setContador(contador + 1)
        }                           
    }

    const resta = () => {
        if(contador > 0){
            setContador(contador - 1)  
        }else{
            setContador(0)
        }
       
        //console.log(contador)    
    }                   
       
    return (
        <div>
            <div className="ItemCount">
                    <h3>Contador:</h3>
                    <p>{contador}</p>                                    
            </div>

            <div className="btn-contador">

                <Button disabled={!botonActivo} inverted color='red' onClick={resta}>
                    -
                </Button>

                <Button disabled={!botonActivo} inverted color='green' onClick={suma}>
                    +
                </Button>                    
                    
            </div>

                <Link to={`/cart/`}>            
                    <Button primary onClick={onAdd}>
                        <Icon name='cart' />Teminar Comprar
                    </Button>            
                </Link>                
               
        </div>
        
    )
}

export default ItemCount


