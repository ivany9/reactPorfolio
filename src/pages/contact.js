import { contains } from 'dom-helpers';
import React from 'react';
import {Form,Cont} from './pagesStyles';
import React, { useState } from 'react';
import {validateEmail, validatename } from '../utils/helpers'

const Contact = () => {

   const [email,setEmail]=useState('');
   const [userName, setUserName]=useState('');
   const [text,setText]=useState('');
   const [errorMessage,setErrorMessage]=useState('');


   const handleInputChange=(e) =>{
   
   const{target}=e;
   const inputType=target.name;
   const inputValue=target.value;
   }

   if(inputType==="name"){
     setUserName(inputValue);
   } else if (inputType==="email") {
    setUserEmail(inputValue);
   }else {
        setText(inputValue);
   }

   const handleFormSubmit = (e) =>{

    e.preventDefault();
   
       if(!validatename(userName)){
         setErrorMessage('Name no valid');
         return;
         }
    
       if(!validateEmail(email)){
          
         setErrorMessage('Email no valid');
         }

         setUserName('');
         setEmail('');



   }






  return (
    
    <Cont>
      <Form>
        Contact
    <div className="form-group">
        <label htmlFor="name">Name</label>
        <input value={userName} onChange={handleInputChange}  type="text" className="form-control" placeholder="Jhon Smith"/>
    </div>
    <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input  value={email} onChange={handleInputChange}  name="email" type="email" className="form-control" aria-describedby="emailHelp" placeholder="name@example.com" />
    </div>
    <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea value={text} className="form-control" rows="10"></textarea>
    </div>
    <button type="submit" className="btn btn-danger " onClick={handleFormSubmit} >Submit</button>
</Form>
</Cont> 

  );
};

export default Contact;
