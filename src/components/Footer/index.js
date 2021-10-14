import React from 'react';
import {FooterLink,Box} from './FooterStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faInstagram,faTwitter,faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
   
    return (
        
        
         <Box>
       
       <FooterLink href="https://facebook.com/jorgivan/" ><FontAwesomeIcon icon={faFacebook}/></FooterLink>
       <FooterLink href="https://instagram.com/jivan298" ><FontAwesomeIcon icon={faInstagram}/></FooterLink>
       <FooterLink href="https://twitter.com/jorgivan298" ><FontAwesomeIcon icon={faTwitter}/></FooterLink>    
       <FooterLink href="https://twitter.com/jorgivan298" ><FontAwesomeIcon icon={faLinkedinIn}/></FooterLink> 
          
           
      </Box>
    );
  };
  export default Footer;





