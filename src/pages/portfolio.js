
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
   description:"-The Team Profile Generator is an app that takes information about employees and them generates a HTML webpage displaying summaries for each person. The App Generate a Manager for project and the user can add roles to complete the project team. "
  },
  {
      title:"Progressive Budget",
      image:progresive,
      url:"https://github.com/ivany9/Progressive-Budget.git",
      id:2,
      deploy:"https://progressibudget.herokuapp.com/",
      description:"The Budget Tracker App, is a digital wallet, you can track your incomes deposits or your outcomes expenses  no matter if the internet conexion is off, when your connection is back the data is going to be update in the database. also is a chart that help you to check the balance between this two operations. withdrawal or deposit relating the balance and the date."
     },
     {
      title:"Weather Dashboard",
      image: wheather,
      url:"https://github.com/ivany9/Weather-Dashboard.git",
      id:3,
      deploy:"https://ivany9.github.io/Weather-Dashboard/",
      description:"Working with the wheatear API, the user can check the forecast for city, for the last 5 days, also the app store in the memory the previews search and generate button for each city "
     },
     {
      title:"Employee Management System",
      image:employee,
      url:"https://github.com/ivany9/Employee-Management-System.git",
      id:4,
      deploy:"https://1drv.ms/v/s!Ap_psURWyWFqhzOratDxVNA5o1Rq?e=17FjeH",
      description:"The Employee Management App is a command line app that allows the user to manipulate data from a sql database. The user can call differents scenarios, you can wiew employee table, Department table, roles table, add employees, add deparments, add roles, update Managers and roles, also you can delete a employer. "
     },
     {
      title:"Fitness Tracker",
      image:fitness,
      url:"https://github.com/ivany9/Fitness-Tracker.git",
      id:5,
      deploy:"https://fittness-track.herokuapp.com/",
      description:" A perfect app to keep on tack your workouts, you can add two types of exercises weights or cardio, and create a nice routine, also you can check the las 7 days workouts and have the statistics in a graphics. "
     },
     {
      title:"Car Enthusiasts",
      image: car,
      url:"https://github.com/ChristopherBz/Car-Enthusiasts.git",
      id:6,
      deploy:"https://car-enthusiasts.herokuapp.com/",
      description:"It's a CMS-style blog site similar to a Wordpress site, where car lovers can publish their blog posts and comment on other fans posts as well. This app follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication. It is deployed to Heroku. ",
     },
  
  
     {
      title:"Tools Finder",
      image: toolsfinder,
      url:"https://github.com/ivany9/toolsfinder",
      id:7,
      deploy:"https://toolsfinder.herokuapp.com/",
      description:"The Tools Finder app is the perfect app to connect our neighborhood and help you get that job done. You can post your tools and make money from renting them out. On the other side you can rent someone elses tools to get your job done, all without spending money buying a new tool that they would only use once. "
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









