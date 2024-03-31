import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
import api from '../../services/api-connection';
import { Link } from 'react-router-dom';
import photoFruits from '../../assets/fruits.jpg'; 
import Button from 'react-bootstrap/Button';
import Product from '../../components/Product';
import Loading from '../../components/Loading';
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

      setProducts(response.data.slice(0, 4));
    }

    loadProducts();
    setLoading(false);

  }, [])

  if(loading) {
    return(
      <Loading/>
    );
  }

  return (
    <div className='home__content'>
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
            <h2><span style={{color: '#FF7809'}}>Produtos</span> em Destaque</h2>
            <p>Confira nossas recomendações para uma experiência de compra incrível</p>
            <div className='list-products'>
              <Row className="justify-content-center">
                {products.map((product) => (
                  <Col xs={6} md={3} lg={2} key={product.id}>
                    <Product id={product.id} image={product.imagem} name={product.nome} price={product.preco} />
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