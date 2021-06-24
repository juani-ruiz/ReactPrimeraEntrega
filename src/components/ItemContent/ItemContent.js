import React, { useState, useEffect } from 'react';
import Item from '../Item/Item';
import axios from 'axios';
import './ItemContent.css';
import { Link } from 'react-router-dom';

function ItemContent() {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        axios('https://breakingbadapi.com/api/characters').then((res) => {
            //console.log(res.data)
            setCharacters(res.data)
    });

    }, []);
    return (
        <div className="ItemContent-container">
            {characters.map((char) => {
                return(
                    <div className='list-section'>
                        <Link to={`/detail/${char.char_id}`}> 
                            <Item data={char} /> 
                        </Link>                       
                    </div>

                );
            })}
        </div>
    )
}

export default ItemContent
