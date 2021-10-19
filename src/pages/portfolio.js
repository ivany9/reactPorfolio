import React from 'react';
import progresive from '../images/progresive-budget.gif'
import team from '../images/team-generator.gif'
import wheather from '../images/wheather-dashboard.gif'
import employee from '../images/employee-manager.gif'
import fitness from '../images/fitness-tracker.gif'
import car from '../images/car-enthusiats.gif'
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import  {Col, Row, Container,Card } from 'react-bootstrap';
import {ImgLink,Cont} from './pagesStyles'


const project=[
  {
   title:"Team Profile Generator",
   image: team,
   url:"https://github.com/ivany9/Team-Profile-Generator.git",
   id:1
  },
  {
      title:"Progressive Budget",
      image:progresive,
      url:"https://github.com/ivany9/Progressive-Budget.git",
      id:2
     },
     {
      title:"Weather Dashboard",
      image: wheather,
      url:"https://github.com/ivany9/Weather-Dashboard.git",
      id:3
     },
     {
      title:"Employee Management System",
      image:employee,
      url:"https://github.com/ivany9/Employee-Management-System.git",
      id:4
     },
     {
      title:"Fitness Tracker",
      image:fitness,
      url:"https://github.com/ivany9/Fitness-Tracker.git",
      id:5
     },
     {
      title:"Car Enthusiasts",
      image: car,
      url:"https://github.com/ChristopherBz/Car-Enthusiasts.git",
      id:6
     }
  
  ]
  
  const Portfolio=()=>{
   
      return(
      
           <div>
              {project.map((projects)=>(

                    <Display name={projects.title} url={projects.url} key={projects.id} image={projects.image} />


              ))}



           </div>
      )

      }



    
  
  
  
  const Display=(props)=>{
    console.log(props.image);
    return(
<section id="portfolio">

<div className="row">

   <div className="twelve columns collapsed">

      <h1>Check Out Some of My Works.</h1>
    
      <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          
    <Col xs><Card style={{ width: '25rem',height:'20rem',margin:'2rem' }}>
   <Card.Img variant="top" src={props.image}/>
    <Card.Body>
    <Card.Title>
    <ImgLink   href={props.url}>{props.name}<FontAwesomeIcon icon={faGithub}/></ImgLink> 
    </Card.Title>
    </Card.Body>
   </Card></Col>
     

   </div>
          </div>
      </div>
   </section>
  
  

   
   
    )



   }
    

   



  



export default Portfolio;



// <div>
//       {project.map((projects) => (
       
//        <div>
//        return (
//         <div>
//           <div className="card" style={cardStyle}>
//             <img
//               className="card-img-top"
//               src={`http://placecorgi.com/${randomWidth()}`}
//               alt="Card cap"
//             />
//             <div className="card-body">
//               <h5 className="card-title">{props.name}</h5>
//               <p className="card-text">{props.description}</p>
//               <a href="#" className="btn btn-primary">
//                 Adopt {props.name}
//               </a>
//             </div>
//           </div>
//         </div>
//             </div>

//       );
//     }





// const Portfolio = () => {
// return (
// <Cont>   
// <Container>
// <Row>
//  <Col xs><Card style={{ width: '25rem',height:'20rem',margin:'2rem' }}>
// <Card.Img variant="top" src={html}/>
// <Card.Body>
// <Card.Title>
// <ImgLink   href="https://github.com/ivany9/Team-Profile-Generator.git">Team Profile Generator  <FontAwesomeIcon icon={faGithub}/></ImgLink> 
// </Card.Title>
// </Card.Body>
// </Card></Col>
// <Col xs={{ order: 12 }}><Card style={{ width: '25rem' ,height:'20rem',margin:'2rem' }}>
// <Card.Img variant="top" src={video}/>
// <Card.Body>
// <Card.Title>
// <ImgLink href="https://github.com/ivany9/Progressive-Budget.git">Progressive-Budget   <FontAwesomeIcon icon={faGithub}/></ImgLink> 
// </Card.Title>
// </Card.Body>
// </Card></Col>
// </Row>
// <Row>
//  <Col xs><Card style={{ width: '25rem', height:'20rem',margin:'2rem' }}>
// <Card.Img variant="top" src={api}/>
// <Card.Body>
// <Card.Title>
// <ImgLink href="https://github.com/ivany9/Weather-Dashboard.git">Weather-Dashboard  <FontAwesomeIcon icon={faGithub}/></ImgLink> 
// </Card.Title>
// </Card.Body>
// </Card></Col>
//  <Col xs={{ order: 12 }}><Card style={{ width: '25rem',height:'20rem',margin:'2rem' }}>
// <Card.Img variant="top" src={Ems}/>
// <Card.Body>
// <Card.Title>
// <ImgLink   href="https://github.com/ivany9/Employee-Management-System.git">Employee-Management-System  <FontAwesomeIcon icon={faGithub}/></ImgLink> 
// </Card.Title>
// </Card.Body>
// </Card></Col>
//  </Row>
//  <Row>
//  <Col xs><Card style={{ width: '25rem',height:'20rem',margin:'2rem' }}>
// <Card.Img variant="top" src={Ft}/>
// <Card.Body>
// <Card.Title>
// <ImgLink   href="https://github.com/ivany9/Fitness-Tracker.git">Fitness-Tracker  <FontAwesomeIcon icon={faGithub}/></ImgLink> 
// </Card.Title>
// </Card.Body>

// </Card></Col>

//  <Col xs={{ order: 12 }}><Card style={{ width: '25rem' ,height:'20rem',margin:'2rem' }}>
// <Card.Img variant="top" src={Ce}/>
// <Card.Body>
// <Card.Title>
// <ImgLink href="https://github.com/ChristopherBz/Car-Enthusiasts.git">Car Enthusiasts  <FontAwesomeIcon icon={faGithub}/></ImgLink> 
// </Card.Title>


// </Card.Body>
// </Card></Col>
// </Row> 
// </Container>
// </Cont>
//  );
// }




