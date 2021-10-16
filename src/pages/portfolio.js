import React from 'react';
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import html from '../images/html.gif';
import video from '../images/video.gif';
import api from '../images/api.gif';
import Ems from '../images/Ems.gif';
import Ft from '../images/Ft.gif';
import Ce from '../images/Ce.gif';
import {ImgLink,Cont} from './pagesStyles'
import 'bootstrap/dist/css/bootstrap.min.css';
import  {Col, Row, Container,Card } from 'react-bootstrap';

    import {
      MDBCarousel,
      MDBCarouselInner,
      MDBCarouselItem,
      MDBCarouselElement,
      MDBCarouselCaption,
    } from 'mdb-react-ui-kit';


     const styles ={
       link:{
           textDecoration: "none",
           fontSize:'1.8rem',
           color:"green ",
           
          },
        
         h5:{
           color:"green",
           fontSize:'1.8rem',

         }
         


     } 



const Portfolio = () => {
  return (
    <Cont>   
    <Container>
    <Row>
      <Col xs><Card style={{ width: '25rem',height:'20rem',margin:'2rem' }}>
  <Card.Img variant="top" src={html}/>
  <Card.Body>
   <Card.Title>
   <ImgLink   href="https://github.com/ivany9/Team-Profile-Generator.git">Team Profile Generator  <FontAwesomeIcon icon={faGithub}/></ImgLink> 
   </Card.Title>
  </Card.Body>
  
</Card></Col>

      <Col xs={{ order: 12 }}><Card style={{ width: '25rem' ,height:'20rem',margin:'2rem' }}>
  <Card.Img variant="top" src={video}/>
  <Card.Body>
   <Card.Title>
   <ImgLink href="https://github.com/ivany9/Progressive-Budget.git">Progressive-Budget   <FontAwesomeIcon icon={faGithub}/></ImgLink> 
   </Card.Title>
   

  </Card.Body>
  
  
</Card></Col>
      
    </Row>
     
    <Row>
      <Col xs><Card style={{ width: '25rem', height:'20rem',margin:'2rem' }}>
  <Card.Img variant="top" src={api}/>
  <Card.Body>
   <Card.Title>
   <ImgLink href="https://github.com/ivany9/Weather-Dashboard.git">Weather-Dashboard  <FontAwesomeIcon icon={faGithub}/></ImgLink> 
   </Card.Title>

  </Card.Body>
  
  
</Card></Col>
      <Col xs={{ order: 12 }}><Card style={{ width: '25rem',height:'20rem',margin:'2rem' }}>
  <Card.Img variant="top" src={Ems}/>
  <Card.Body>
   <Card.Title>
   <ImgLink   href="https://github.com/ivany9/Employee-Management-System.git">Employee-Management-System  <FontAwesomeIcon icon={faGithub}/></ImgLink> 
   </Card.Title>

  </Card.Body>
  
</Card></Col>
     
      </Row>

      <Row>
      <Col xs><Card style={{ width: '25rem',height:'20rem',margin:'2rem' }}>
  <Card.Img variant="top" src={Ft}/>
  <Card.Body>
   <Card.Title>
   <ImgLink   href="https://github.com/ivany9/Fitness-Tracker.git">Fitness-Tracker  <FontAwesomeIcon icon={faGithub}/></ImgLink> 
   </Card.Title>
  </Card.Body>
  
</Card></Col>

      <Col xs={{ order: 12 }}><Card style={{ width: '25rem' ,height:'20rem',margin:'2rem' }}>
  <Card.Img variant="top" src={Ce}/>
  <Card.Body>
   <Card.Title>
   <ImgLink href="https://github.com/ChristopherBz/Car-Enthusiasts.git">Car Enthusiasts  <FontAwesomeIcon icon={faGithub}/></ImgLink> 
   </Card.Title>
   

  </Card.Body>
  
  
</Card></Col>
      
    </Row>



      
     </Container>

 </Cont>





      );
    }
export default Portfolio;






