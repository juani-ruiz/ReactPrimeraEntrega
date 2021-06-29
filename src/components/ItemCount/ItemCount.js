import React, { useState } from 'react'
import './ItemCount.css';
import { Button, Icon } from 'semantic-ui-react'
import {Link} from 'react-router-dom';


function ItemCount() {  

    //catidad de articulos, guarda el count
    const [cantidad, setCantidad] = useState("0");

    console.log(cantidad);

  const onAdd = (e) => {

    setCantidad(e.target.value);
   
}

    const [data, setData] = useState(0);
    //
    //Suma y resta
    const addButton = () => {
        setData(data + 1)
        //console.log(data)               
        
    }

    const delButton = () => {
        setData( data - 1)
        //console.log(data)    
    }       
        
    if (data >= 5 || data <= 0) {
        //console.log("deshabilita!!!")

    } 
       
    return (
        <div>
            <div className="ItemCount">
                    <h3>Contador:</h3>
                    <p>{data}</p>
                                    
                </div>

                <div className="btn-contador">

                    <Button inverted id="btnMenos" color='red' onClick={delButton}>
                        -
                    </Button>

                    <Button inverted id="btnMas" color='green' onClick={addButton}>
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


