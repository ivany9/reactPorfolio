import {Form,Cont} from './pagesStyles';
import React, { useState } from 'react';
import {validateEmail,validata } from '../utils/helpers'
import  { Button,Container,Row,Col} from 'react-bootstrap';
import { NavLink } from '../components/Navbar/NavbarElements';
import {FooterLink} from '../components/Footer/FooterStyles';
import { FontAwesomeIcon,envelope } from '@fortawesome/react-fontawesome';
import { faFacebook,faInstagram,faGithub,faLinkedin} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {

   const [email,setEmail]=useState('');
   const [userName, setUserName]=useState('');
   const [texta,setText]=useState('');
   const [errorMessagename,setErrorMessagename]=useState('');
   const [errorMessageemail,setErrorMessageemail]=useState('');
   const [errorMessagedescription,setErrorMessagedescription]=useState('');

   const handleInputChange=(e) =>{
   
   const{target}=e;
   const inputType=target.name;
   const inputValue=target.value;
   
   

   if(inputType==='userName'){
    setUserName(inputValue);
   } else if (inputType==='email') {
    setEmail(inputValue);
    
   }else {
         
        setText(inputValue);
   }

  }

   const handleFormSubmit = (e) =>{

    e.preventDefault();
   
       if(!validata(userName)){
        //alert(userName);
         setErrorMessagename('Include name');
         return
         }
    
     else if(!validateEmail(email)){
          
        
         setErrorMessageemail('Invalid email');
         return;
         }
         else  if (!validata(texta)) {
          setErrorMessagedescription('Description empty');   
          return;  
         }

         setUserName('');
         setEmail('');
         setText('');
         setErrorMessageemail('');
         setErrorMessagename('');
         setErrorMessagedescription('');

   }

  




  return (
    
    
    <Cont>
      <Form>
        
        
     <Row>
     <Col>
    <div className="form-group p-1">
     
        <label htmlFor="name">Name</label>
        <input value={userName} onChange={handleInputChange} name="userName"  className="form-control" placeholder="name"/><p> {errorMessagename}</p>
    </div>
    <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input  value={email} onChange={handleInputChange}  name="email" type="email" className="form-control" aria-describedby="emailHelp" placeholder="name@example.com" />
        <p> {errorMessageemail}</p>
    </div>
    <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea value={texta} onChange={handleInputChange} className="form-control" name="texta" rows="10"></textarea>  <p> {errorMessagedescription}</p>
    </div>
    <div>
      <br/>
      </div>
      < Button variant="dark" size="lg" onClick={handleFormSubmit}>Submit</Button>{"           "}
      <div className="form-group d-flex justify-content-end text-secondary" >
      
      </div>
      </Col>
      <Col>
        
       <div className="contact d-flex flex-column justify-content-end p-1">
      <FooterLink href="https://facebook.com/jorgivan/" ><FontAwesomeIcon icon={faFacebook}/>  facebook</FooterLink>
       <FooterLink href="https://instagram.com/jivan298" ><FontAwesomeIcon icon={faInstagram}/>  Instagram</FooterLink>
       <FooterLink href="https://github.com/ivany9" ><FontAwesomeIcon icon={faGithub}/>  Github</FooterLink>
       <FooterLink href="https://www.linkedin.com/in/jorge-ivan-2022b4113" ><FontAwesomeIcon icon={faLinkedin}/>  Linkedin</FooterLink>
       <FooterLink className="fa fa-envelope" href="mailto:ivany9@gmail.com" >  email</FooterLink>
       </div>
      </Col>


      </Row>
      

     </Form>




     
     

     
    
</Cont> 


  );
};

export default Contact;
