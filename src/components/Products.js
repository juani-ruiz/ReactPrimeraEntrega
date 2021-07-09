import React, {useEffect, useState} from 'react';
import FormComponent from '../components/FormComponent/FormComponent';
 import ItemList from './ItemList/ItemList';
import { db } from '../firebase';

const styles = {
	cardStyles: {
		backgroundColor: 'white',
		padding: 20,
		margin: 10,
		borderRadius: 8,
		boder: '1px solid black',
	},
};

const Products = () => {

    const [products, setProducts] = useState([]);
   
    const addOrEdit = async (object) => {
        console.log(object);
        await db.collection('Productos').doc().set(object);
        console.log("nuevo producto agregado")
    }

    const getProducts = () => {        
        db.collection('Productos').onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
                //console.log(docs.data());
                //console.log(docs.id);
                docs.push({ ...doc.data(), id: doc.id });
                
            });
            setProducts(docs)
        });
    };
    
    useEffect(() => {
        getProducts()        
    }, []);
    console.log(products);
    return (

        <div>
            <h1>Productos</h1>
            <FormComponent addOrEdit={addOrEdit} />

            <h1>Listado</h1>

            { products.map((item) => (
                <div key={item.id} style={styles.cardStyles}>
                    <ItemList prop={item}/>
                </div>
            )) }
        </div>
      
    )  
}

export default Products