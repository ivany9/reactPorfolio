import React from "react";
import '../Navbar/Navbar2.css';
import { NavLink } from "react-router-dom";



const NavBar = ()=>{



 return(
 
   <nav className="navbar navbar-expand-lg d-flex justify-content-around navbar-mainbg">

     <NavLink className="navbar-brand navbar-main" to="/" exact>
       Jorge Ivan Rodriguez
       </NavLink>

   <button
   className="navbar-toggler"
   type="button"
   data-toggle="collapse"
   data-target="#navbarSupportedContent"
   aria-controls="navbarSupportedContent"
   aria-expanded="false"
   aria-label="Toggle navigation">
     <i className="fas fa-bars text-white"></i>
   </button>

   
   <div 
   className="collapse navbar-collapse" id="navbarSupportedContent">
   <ul className="navbar-nav ml-auto"> 
   <div className="hori-selector">
     <div className="left"></div>
     <div className="right"></div>
     </div>

     
       <li className="nav-item">
        <NavLink className="nav-link" to="/about" exact>
          <i className="far fa-address-card">
            </i>About</NavLink>
        </li>

      <li className="nav-item">
        <NavLink className="nav-link" to="/portfolio" exact>
          <i className="far fa-address-book">
            </i>Portfolio</NavLink>
        </li>
  
        <li className="nav-item">
        <NavLink className="nav-link" to="/contact" exact>
          <i className="far fa-id-card">
            </i>Contact</NavLink>
        </li>
        <li>
        <NavLink className="nav-link" to="/resume" exact>
          <i className="far fa-file">
            </i>Resume</NavLink>
        </li>


     
      
   
   
   </ul>


   </div>

 </nav>




 );


}

export default NavBar;











// import React,{useState} from 'react';
// import {NavLink} from 'react-router-dom'
// import {MainLink} from './NavbarElements';


// import  './NavBar.css';

// const Navbar = () => {
 
//    const [click,setClick]=useState(false);

//    const handleClick=()=>setClick(!click);


//   return (
//     <>
//         <nav className="navbar">
//         <div className="nav-container">
//            <NavLink to='/about'>
//            <MainLink> Jorge Ivan Rodriguez</MainLink> 
               
//             </NavLink>
        
   
//         <ul className={click ? "nav-menu active" : "nav-menu"}>
//         <li className="nav-item">
//           <NavLink to='/about' 
//             activeClassName="active"
//              className="nav-links"
//             onClick={handleClick}
//           >
//             About me
//             </NavLink>
            
//           </li>
//           <li className="nav-item">
//           <NavLink to='/portfolio' 
//             activeClassName="active"
//             className="nav-links"
//             onClick={handleClick} 
//             >Portfolio
//           </NavLink>
//           </li>
//           <li className="nav-item">
//           <NavLink to='/contact' 
//            activeClassName="active"
//            className="nav-links"
//            onClick={handleClick}
//            >Contact 
//           </NavLink>
//           </li>
//           <li className="nav-item">
//           <NavLink to='/resume'
//            activeClassName="active"
//           className="nav-links"
//           onClick={handleClick}
//           >Resume
//           </NavLink>
//            </li>
//            </ul>
//              <div className="nav-icon" onClick={handleClick}>
//                 <i className={click? "fas fa-times":"fas fa-bars"}></i> 
//              </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;
