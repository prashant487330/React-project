// import logo from "../Images/logo.avif"
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { useState } from "react";
// import { Button } from "react-bootstrap";
// import {Modal} from 'bootstrap';
// import { Form } from "react-bootstrap";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// const TopMenu=()=>{
//   const[show,setShow]=useState(false);
//   const[email,setEmail]=useState("");
//   const [password,setPassword]=useState("");
//   const handleClose=()=>setShow(false);
//   const handleShow=()=>setShow(true);
//   const navigate=useNavigate();

//   const handleSubmit=async(e)=>{
//     e.preventDefault();
//     let api=`http://localhost:3000/admin/?adminid=${email}`;
//     const response=await axios.get(api);
//     console.log(response.data);
//     if(response.data.length>=1){
//       if(response.data[0].password==password){
//         navigate("/admin")
//       }else{
//         alert("Wrong Password")
//       }
//     }else{
//       alert("Invalid Email")
//     }
//   }  
//     return(
//         <>
//          <div id="topmenu">
//             <div id="logo">
//               <img src={logo} width="175" height="40" style={{marginTop:"15px",marginLeft:"50px"}} />
//             </div>
//             <div id="mainmenu">
//      <Navbar >
//         <Container>
//           <Nav className="me-auto">
//             <Nav.Link as={Link} to="home">Home</Nav.Link>
//             <Nav.Link href="#features">Features</Nav.Link>
//             <Nav.Link href="#about">About</Nav.Link>
//             <Nav.Link href="#pricing">Pricing</Nav.Link>
//             <Nav.Link href="#contact">Contact</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>
//             </div>
//             <div id="rightmenu">
//               <Button variant="primary" onClick={handleShow}>Admin Login</Button>
//             </div>
//          </div>

//         <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Admin Login</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>

//            <Form>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control type="email" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control type="password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
//       </Form.Group>
     
//       <Button variant="primary" type="submit" onClick={handleSubmit}>Login</Button>
//     </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>Close</Button>
//         </Modal.Footer>
//       </Modal>   
//         </>
//     )
// }
// export default TopMenu;

// TopMenu.jsx

import logo from "../Images/logo.avif";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

const TopMenu = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let api = `http://localhost:3000/admin/?adminid=${email}`;
      const response = await axios.get(api);
      console.log(response.data);
      if (response.data.length >= 1) {
        if (response.data[0].password === password) {
          navigate("/admin");
        } else {
          alert("Wrong Password");
        }
      } else {
        alert("Invalid Email");
      }
    } catch (err) {
      console.error(err);
      alert("Error while logging in.");
    }
  };

  return (
    <>
      <div id="topmenu" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 50px" }}>
        <div id="logo">
          <img src={logo} width="175" height="40" alt="Logo" />
        </div>
        <div id="mainmenu">
          <Navbar>
            <Container>
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </div>
        <div id="rightmenu">
          <Button variant="primary" onClick={handleShow}>Admin Login</Button>
        </div>
      </div>

      {/* Admin Login Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Admin Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">Login</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TopMenu;
