import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
import api from '../../services/api-connection';
import { Link } from 'react-router-dom';
import photoFruits from '../../assets/fruits.jpg'; 
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import './home.css';

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState([true]);

  useEffect(() => {

    async function loadProducts() {
      const response = await api.get("http://localhost:3000/produtos", {
        params:{
          // Possíveis parâmetros para serem inseridos depois
        }
      })

      setProducts(response.data.slice(0, 12));
    }

    loadProducts();
    setLoading(false);

  }, [])

  if(loading) {
    return(
      <div className="d-flex justify-content-center align-items-center" style={{ height: '75vh' }}>
        <Spinner animation="border" role="status" className="spinner">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    )
  }

  return (
    <div>
      <Container>
        <Row>
          <Col className='bg-light col-text'>
            <h1><span style={{color: '#FF7809'}}>Simplifique</span> suas compras, otimize seu tempo</h1>
            <p>Compre seus itens de supermercado de forma rápida e conveniente, sem sair de casa</p>
            <Button>Produtos <span className='fas fa-arrow-right'></span></Button>
          </Col>
          <Col className='col-img'>
            <img src={photoFruits} />
          </Col>
        </Row>

        <div className='products-emphasis'>
          <div className='products-emphasis__text d-flex flex-column align-items-center'>
            <h1>Produtos em Destaque</h1>
            <p>Confira nossas recomendações para uma experiência de compra incrível</p>
            <div className='list-products'>
              <Row className="justify-content-center">
                {products.map((product) => (
                <Col xs={6} md={3} lg={3} key={product.id}>
                 <img src={product.imagem} alt={product.nome} />
                 <p>{product.nome}</p>
                <p>R${product.preco}</p>
                </Col>
              ))}
              </Row>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Home;