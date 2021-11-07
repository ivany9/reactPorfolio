import React, { } from 'react';
// import profilephoto from '../images/Ce.gif';
import { Cont, Container, Photo} from './pagesStyles';
import 'bootstrap/dist/css/bootstrap.min.css';
import  {Col, Row} from 'react-bootstrap';

import ivan from '../images/ivan.jpg'


const About = () => {
  return (
    
    
     

     <Cont>
    <Container>
    <Row>
      <Col sm={6}><Photo src={ivan}/></Col>
    </Row>
    <Row>
      <Col sm={4}></Col>
      <Col sm={6}>
      <h4>About Me</h4>
      <div>
       <br/>
       <br/>
      </div>
        <p>
        Graduated as a systems engineer in 2006 with a degree from Politecnico University, Colombia. Full Stack Web Developer
           with a formal qualification from the University of Sydney Boot Camp.
         Creative problem solver who is passionate about learning and expanding knowledge in new technologies. 
          Experience in front end and back end developing with a focus on developing apps that are functional and user friendly.  
           Bringing projects to life with strong development, design, and technical skills.</p>
        <div>
       <br/>
       
      </div>   
        <p>Living in Sydney Australia since 2015 with a passion   for technology and developing.
        
       </p>
       <div>
       <br/> 
     </div>        
         <p>Working in technologies including JavaScript, Node.js, React, CSS, MongoDB, MySQL.</p>
         <div>
       <br/>
      </div>
            <p> Passionate about riding motorcycles, spending an afternoon on my paddle board, and sitting down to develop and create on my computer.
           </p>
      </Col>  
    </Row>
  </Container>
  </Cont>
  )
  
}

export default About;


