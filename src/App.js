import "./css/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home";
import About from "./About";
import Contacts from "./Contacts";
import Programs from "./Programs";
import Booking from "./Booking";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Regulamin from "./Regulamin";
import { Routes, Route } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faHome} from '@fortawesome/free-solid-svg-icons'


function App() {
  return (
    <>
  
      <Navbar bg="success" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/programs">Programs</Nav.Link>
            <Nav.Link href="/booking">Booking</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contacts">Contacts</Nav.Link>
          </Nav>
            <Regulamin/>
        </Container>
      </Navbar>
     <Navbar bg="success" variant="light" fixed="bottom" className="ps-3">
        
      <span className="text-white">
      <FontAwesomeIcon icon={faPhone} /><a href="tel:+48413782318"> 41 378 23 18</a>
      <FontAwesomeIcon icon={faPhone} /><a href="tel:+48600454635"> 600 45 46 35</a>
      <FontAwesomeIcon icon={faPhone} /><a href="tel:+48604596473"> 604 59 64 73</a> 
      <FontAwesomeIcon icon={faEnvelope} /><a href="mailto:+dormedbusko@gmail.com"> dormedbusko@gmail.com</a>
      <FontAwesomeIcon icon={faHome} /><span className="fs-5"> ul. Rokozha 5, 28-100, Busko-Zdroj, Poland</span>
      </span>
      </Navbar>
        <Routes> 
         <Route path="/" element={<Home />}></Route>
         <Route path="/programs" element={<Programs />}></Route>
         <Route path="/booking" element={<Booking />}></Route>
         <Route path="/about" element={<About />}></Route>
         <Route path="/contacts" element={<Contacts />}></Route>
       </Routes> 
    </>
  );
}

export default App;
