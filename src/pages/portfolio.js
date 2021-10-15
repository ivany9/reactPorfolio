import React from 'react';
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import html from '../images/html.gif';
import video from '../images/video.gif';
import api from '../images/api.gif';
import {ImgLink,Cont} from './pagesStyles'

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
        <MDBCarousel showIndicators showControls fade>
          <MDBCarouselInner>
            <MDBCarouselItem itemId={0}>
              <MDBCarouselElement img src={html} alt='...' />
              <MDBCarouselCaption>
              <h5 style= {styles.h5} ></h5>
                <ImgLink   href="https://github.com/ivany9/Team-Profile-Generator.git"><FontAwesomeIcon icon={faGithub}/></ImgLink>
              </MDBCarouselCaption>
            </MDBCarouselItem>
    
            <MDBCarouselItem itemId={1}>
              <MDBCarouselElement img src={video} alt='...' />
              <MDBCarouselCaption>
                <h5 style= {styles.h5} ></h5>
                <ImgLink href="https://github.com/ivany9/Progressive-Budget.git"><FontAwesomeIcon icon={faGithub}/></ImgLink>
              </MDBCarouselCaption>
            </MDBCarouselItem>
    
            <MDBCarouselItem itemId={2}>
              <MDBCarouselElement img src={api} alt='...' />
              <MDBCarouselCaption>
              <h5 style= {styles.h5} ></h5>
                <ImgLink href="https://github.com/ivany9/Weather-Dashboard.git"><FontAwesomeIcon icon={faGithub}/></ImgLink>
              </MDBCarouselCaption>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
        </Cont>
      );
    }
export default Portfolio;
