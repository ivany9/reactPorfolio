import React from 'react';
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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


     } 



const Portfolio = () => {
  return (
        <MDBCarousel showIndicators showControls fade>
          <MDBCarouselInner>
            <MDBCarouselItem itemId={0}>
              <MDBCarouselElement src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg' alt='...' />
              <MDBCarouselCaption>
                <h5>First slide label</h5>
                <a style={styles.link} href=""><FontAwesomeIcon icon={faGithub}/></a>
              </MDBCarouselCaption>
            </MDBCarouselItem>
    
            <MDBCarouselItem itemId={1}>
              <MDBCarouselElement src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg' alt='...' />
              <MDBCarouselCaption>
                <h5>Second slide label</h5>
                <a style={styles.link} href=""><FontAwesomeIcon icon={faGithub}/></a>
              </MDBCarouselCaption>
            </MDBCarouselItem>
    
            <MDBCarouselItem itemId={2}>
              <MDBCarouselElement src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg' alt='...' />
              <MDBCarouselCaption>
                <h5>Third slide label</h5>
                <a style={styles.link} href=""><FontAwesomeIcon icon={faGithub}/></a>
              </MDBCarouselCaption>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      );
    }
export default Portfolio;
