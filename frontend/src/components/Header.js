import React, {useContext} from "react";
import {RfqContext} from './RfqContext'
import Navbar from "react-bootstrap/Navbar";
import { NavDropdown, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";




const Header = () => {
  const [appState, setAppState] = useContext(RfqContext)
  const handleLogout = (e)=>{
    localStorage.removeItem("rfqtoken")
    setAppState({logged:false, username:""})
  }
  const logNav = ()=>{
    if(appState.logged)
    return ( <Nav>
       <Nav.Link>
             <Link to={"/logout"} onClick={handleLogout}>Hello {appState.username},  Logout</Link>
            </Nav.Link>
            </Nav> )
else 
return (
<Nav>
          
          <Nav.Link>
              {" "}
              <Link to={"/login"}>Login</Link>
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link to={"/signup"}>SignUp</Link>
            </Nav.Link>
          </Nav>
)
}
  return (
    <div>
      <Navbar className="navbar" collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand href="#home">
          <h1>M&M</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              {" "}
              <Link to={"/"}>Home</Link>
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link to={"/"}>About</Link>
            </Nav.Link>
           
            <Nav.Link>
              {" "}
              <Link to={"/dash"}>Dash Board</Link>
            </Nav.Link>
          </Nav>
         
          {logNav()}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
