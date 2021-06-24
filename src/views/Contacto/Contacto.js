import React from 'react'
import { Form, Input, TextArea, Button } from 'semantic-ui-react'
import './Contacto.css';



const FormularioContacto = () => (

    <div className="Formulario">
        <Form>
            <Form.Group widths='equal'>
            <Form.Field
                id='form-input-control-first-name'
                control={Input}
                label=''
                placeholder='Ingresá tu nombre'
            />     
            
            </Form.Group>
            <Form.Field
            id='form-textarea-control-opinion'
            control={TextArea}
            label=''
            placeholder='Dejanos un mensaje'
            />
            <Form.Field
            id='form-input-control-error-email'
            control={Input}
            label=''
            placeholder='Tu email...'
            error={{
                content: 'Ingresá un email válido!!',
                pointing: 'below',
            }}
            />
            <Form.Field
            id='form-button-control-public'
            control={Button}
            content='Enviar'
            label=''
            />
        </Form>
        </div>   
)

export default FormularioContacto