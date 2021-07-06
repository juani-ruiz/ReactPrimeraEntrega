import React, { useState } from 'react';
import './FormComponent.css';
import { Button, Form, TextArea } from 'semantic-ui-react';

const FormComponent = ({ addOrEdit }) => {
    const initialState = {
        producto: '',
        precio: '',
        descripcion: '',

    };

    const [values, setValues] = useState(initialState);

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        setValues({ ...values, [name]: value })
    }
    

    const handleOnSubmit = (e) => {
        e.preventDefault();
        addOrEdit(values);
        setValues({ ...initialState });
    }

    
    return (
        <div className='form-container'>
            <Form onSubmit={handleOnSubmit}>
               <Form.Field>
                    <input 
                        placeholder='producto' 
                        onChange={handleOnChange}  
                        name='producto'
                        value={values.producto}
                    />
               </Form.Field>


               <Form.Field>
                    <input 
                        placeholder='precio'
                        onChange={handleOnChange}
                        name='precio'
                        value={values.precio}
                    />                
               </Form.Field>


               <Form.Field>
                    <TextArea 
                        placeholder='descripcion'
                        onChange={handleOnChange}
                        name='descripcion'
                        value={values.descripcion}
                    />
               </Form.Field>


               <Button type='submit' primary fluid>
                    Guardar
               </Button>

            </Form>
            
        </div>

    )

}

export default FormComponent