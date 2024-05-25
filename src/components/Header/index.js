import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api-connection';
import { toast } from "react-toastify";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

import ButtonIcon from '../Buttons/ButtonIcon';
import Icon from '../Icon';
import Input from '../../components/Input';

import Logo from '../../assets/logo.png';
import './header.css';

function Header() {
  const [products, setProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const navigation = useNavigate();
  const iconCart = "fas fa-shopping-cart icon"; // Para componente de icon, deve haver classe icon para aplicar o estilo corretamente
  const iconEnvelope = "fa fa-envelope icon"; // Para componente de icon, deve haver classe icon para aplicar o estilo corretamente
  const iconCaroot = "fas fa-carrot";
  const textButtonIcon = "Buscar";

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get("http://localhost:3000/produtos", {
        params:{
          // Possíveis parâmetros para serem inseridos depois
        }
      })

      setProducts(response.data);
    }

    loadProducts();

  }, [])

  const handleSearch = () => {
    const searchValueLower = searchValue.toLowerCase(); 
    const productSearched = products.find(product => product.nome.toLowerCase().includes(searchValueLower));

    setSearchValue("");

    if(productSearched) {
      navigation(`/produto/${productSearched.id}`);
    } else {
      toast.warn("Não há este produto no mercado!");
      navigation(`/produtos`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <Navbar expand="lg" className="header bg-body-tertiary">
      <Container fluid className="header__content">
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
            <Input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} onKeyDown={handleKeyPress} />
            <ButtonIcon onClick={handleSearch} icon={iconCaroot} text={textButtonIcon} />
            <Link to="/carrinho" ><Icon icon={iconCart}/></Link>
            <Icon icon={iconEnvelope}/>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;