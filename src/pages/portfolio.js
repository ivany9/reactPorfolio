
import progresive from '../images/progresive-budget.gif'
import team from '../images/team-generator.gif'
import wheather from '../images/wheather-dashboard.gif'
import employee from '../images/employee-manager.gif'
import fitness from '../images/fitness-tracker.gif'
import car from '../images/car-enthusiats.gif'
import toolsfinder from '../images/ToolsFinder.gif'
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ImgLink,Cont} from './pagesStyles'
import React from 'react';


const project=[
  {
   title:"Team Profile Generator",
   image: team,
   url:"https://github.com/ivany9/Team-Profile-Generator.git",
   id:1,
   deploy:"https://ivany9.github.io/Team-Profile-Generator/",
   description:"The Team Profile Generator is an app that takes information about employees and  generates a HTML webpage displaying summaries for each person. The app generates a Manager for each project and the user can then add roles to complete the project team. "
  },
  {
      title:"Progressive Budget",
      image:progresive,
      url:"https://github.com/ivany9/Progressive-Budget.git",
      id:2,
      deploy:"https://progressibudget.herokuapp.com/",
      description:"The Budget Tracker App is a digital wallet  where  you can track your incoming  deposits and your outgoing expenses. If the internet connection is off, as soon as you connect  back on  your data  will automatically update in the database. The app  also includes a chart that allows you to check the balance of your funds."
     },
     {
      title:"Weather Dashboard",
      image: wheather,
      url:"https://github.com/ivany9/Weather-Dashboard.git",
      id:3,
      deploy:"https://ivany9.github.io/Weather-Dashboard/",
      description:"The weather Dashboard is an app that  works using  weather API's. The user can check the forecast  of  any  city  for the next 5 days. The app stores the searches of the user  in the memory, and the user can search quickly by using the   button generated for each previous city searched. "
     },
     {
      title:"Employee Management System",
      image:employee,
      url:"https://github.com/ivany9/Employee-Management-System.git",
      id:4,
      deploy:"https://1drv.ms/v/s!Ap_psURWyWFqhzOratDxVNA5o1Rq?e=17FjeH",
      description:"The Employee Management App is a command line app that allows the user to manipulate data from an sql database. The user can manage employee details and add relevant information  including  Department, Roles, add deparments, add roles, update Managers and roles, and  also you can delete an employer when from teh system. "
     },
     {
      title:"Fitness Tracker",
      image:fitness,
      url:"https://github.com/ivany9/Fitness-Tracker.git",
      id:5,
      deploy:"https://fittness-track.herokuapp.com/",
      description:"The Fitness Tracker is a  perfect app to keep on track with  your workouts. You can add two types of exercises, weights or cardio, and create  excercise  routines.The app allows you  to check your  last 7 days of  workouts, and display  the statistics in a graph. "
     },
     {
      title:"Car Enthusiasts",
      image: car,
      url:"https://github.com/ChristopherBz/Car-Enthusiasts.git",
      id:6,
      deploy:"https://car-enthusiasts.herokuapp.com/",
      description:"The car Enthusiasts is a CMS-style blog site similar to a Wordpress site. It is a side where car lovers can publish their blog posts and comment on other fans posts. This app follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication. It is deployed to Heroku. ",
     },
  
  
     {
      title:"Tools Finder",
      image: toolsfinder,
      url:"https://github.com/ivany9/toolsfinder",
      id:7,
      deploy:"https://toolsfinder.herokuapp.com/",
      description:"The Tools Finder app is the perfect app to connect people in their local  neighborhood and help you get that job done. You can post your tools and make money from renting them out. On the other side you can rent someone elses tools to get your job done, all without spending money buying a new tool that they would only use once. "
     }
  
  
  
  
  
    ]
  

  const  Portfolio=()=> {
    return (
      <Cont>
      <div>
        <h3 className = "text-center mb-3 fw">Projects</h3>
        <div className = "d-flex flex-wrap justify-content-evenly">
        {project.map((projects)=>(
        <Card
        name = {projects.title}
        image = {projects.image}
        url = {projects.url}
        id = {projects.id}
        deploy={projects.deploy}
        description={projects.description}
        />
        ))}
        </div>
      </div>
      </Cont>
    );
      
     
  }

  function Card(props) {
     
    const style = {
      width:"25rem"
    } 

    return (
        <div className="card m-3" style={style}>
            <img src={props.image} className="card-img-top" alt="..." />
            <div className="card-body d-flex justify-content-center">
                <h5 className="card-title fw-bold">{props.name}</h5>
                
            </div>
            <div className="card-body d-flex justify-content-center ">
             
            <ImgLink   href={props.url}><FontAwesomeIcon icon={faGithub} /></ImgLink> 
            <ImgLink   href={props.deploy}><FontAwesomeIcon icon={faCoffee}/></ImgLink>
             </div>

            
            <div className="description justify-content-sm-center font-size:small p-3">

              <p>
                {props.description}
              </p>
              
            </div>
        </div>
    )
   }
  

 export default Portfolio;









