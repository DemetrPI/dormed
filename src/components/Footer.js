import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faHome } from "@fortawesome/free-solid-svg-icons";

function Footer() {
    return (
    <div>
    <Navbar bg="success" variant="light" className="ps-3">
      <span className="text-white">
        <FontAwesomeIcon icon={faPhone} />
        <a href="tel:+48413782318"> 41 378 23 18</a>
        <FontAwesomeIcon icon={faPhone} />
        <a href="tel:+48600454635"> 600 45 46 35</a>
        <FontAwesomeIcon icon={faPhone} />
        <a href="tel:+48604596473"> 604 59 64 73</a>
        <FontAwesomeIcon icon={faEnvelope} />
        <a href="mailto:+dormedbusko@gmail.com"> dormedbusko@gmail.com</a>
        <FontAwesomeIcon icon={faHome} />
        <span className="fs-5">
          {" "}
          ul. Rokozha 5, 28-100, Busko-Zdroj, Poland
        </span>
      </span>
    </Navbar>
  </div>
      );
    }

export default Footer;
