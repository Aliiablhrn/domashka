import React from 'react';
import { Button } from 'react-bootstrap';


const IsLogged = (props) => {
    
    // console.log(props.form);
    // console.log(props.form.email);
    // console.log(props.form.password);

    
    return (
        <div>
             <h1>Привет, {props?.form?.email}</h1> 
           <Button onClick={() => props.setShow(true)} className='btn btn-danger m-3'>Выйти</Button>
        </div>
    );
};

export default IsLogged;