
import logo from "../Images/logo.avif"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const TopMenu=()=>{
    return(
        <>
         <div id="topmenu">
            <div id="logo">
              <img src={logo} width="175" height="40" style={{marginTop:"15px",marginLeft:"50px"}} />
            </div>
            <div id="mainmenu">
     <Navbar >
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
            </div>
            <div id="rightmenu">
              Admin Login
            </div>
         </div>
        </>
    )
}

export default TopMenu;