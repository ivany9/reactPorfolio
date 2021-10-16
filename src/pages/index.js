import React from 'react';
import profilephoto from '../images/Ce.gif';
import resume from '../images/api.gif'
import {Form,Cont,ImgLink} from './pagesStyles';

const Home = () => {
  return (
     
      <Cont>
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilephoto} alt="Jorge Ivan Rodriguez " />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>dfgdflkgjfdklhjkdfhkghllkfghgfjfgjfgjgfmhgf.bm.gfm.gfmb.fmb.gfm.bmgf.,m</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span>Jorge Ivan Rodriguez</span><br />
						   <span>22 st Marks Rd <br />
						         Randwick NSW, 2031
                   </span><br />
						   <span>+61 0468757314</span><br />
                     <span>ivany9@gmail.com</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={resume} className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
   </Cont>
    );
  
}

export default Home;
