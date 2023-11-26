import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";


const Navegacion = () => {
  return (
    <Navbar
      bg="danger"
      variant="danger"
    >
      <Container className="justify-content-start">
        {/* Links */}
        <Link to="/" className="text-white ms-3 text-decoration-none"><i class="bi bi-envelope-at-fill fs-6"></i> Home </Link>
        <Link to="/contacto" className="text-white ms-3 text-decoration-none"><i class="bi bi-envelope-at-fill fs-6"></i> Contacto </Link>
       
      </Container>
      <div >
        <Link to="/happycake" className="text-white text-decoration-none cake"><i class="bi bi-cake2-fill fs-6"></i> Happy Cake </Link>
        </div>
    </Navbar>
  );
};
export default Navegacion;
