import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
      <Nav>
       <NavMenu>
         <NavLink to="/" activeStyle>
           home
         </NavLink>
         <NavLink to="/political_quiz" activeStyle>
           quiz
         </NavLink>
       </NavMenu>
     </Nav>
      </Nav>
    </>
  );
};
  
export default Navbar;