import React from 'react';
import '../sytlesheets/ShowButton.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';


function ShowButton() {

  return (
    <div className='button'>
      <Container>
        <Button variant="success">Log In</Button>
      </Container>
    </div>
  );
}

export default ShowButton;