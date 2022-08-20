import React from "react";
import '../sytlesheets/Input.css'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';


function Input({ text, type, placeholder, control, onChange }) {

  return (
    <div className='input'>
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId={control}>
            <Form.Label>{text}</Form.Label>
            <Form.Control type={type} placeholder={placeholder} onChange={onChange}/>
          </Form.Group>
        </Form>
      </Container>
    </div>
  );
}


export default Input;