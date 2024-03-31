import ButtonIcon from '../ButtonIcon';
import Icon from '../Icon';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import './header.css';

function Header() {
  const iconCart = "fas fa-shopping-cart icon"; // Para componente de icon, deve haver classe icon no final para aplicar o estilo corretamente
  const iconEnvelope = "fa fa-envelope icon"; // Para componente de icon, deve haver classe icon no final para aplicar o estilo corretamente
  const iconCaroot = "fas fa-carrot";
  const textButton = "Buscar";

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/"><img src={Logo}></img></Navbar.Brand> 
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/produtos" className="nav-link">Produtos</Link>
            <Link className="nav-link">Destaque</Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Digite o produto..."
              aria-label="Search"
            />
            <ButtonIcon icon={iconCaroot} text={textButton} />
            <Icon icon={iconCart}/>
            <Icon icon={iconEnvelope}/>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;