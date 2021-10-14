import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/home'>
          Jorge Ivan Rodriguez
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About me
          </NavLink>
          <NavLink to='/portfolio' activeStyle>
            Portfolio
          </NavLink>
          <NavLink to='/contact' activeStyle>
            Contact 
          </NavLink>
          <NavLink to='/resume' activeStyle>
            Resume
          </NavLink>
         </NavMenu>
          
      </Nav>
    </>
  );
};

export default Navbar;
