import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
import api from '../../services/api-connection';
import { Link } from 'react-router-dom';
import photoFruits from '../../assets/fruits.jpg'; 
import Button from 'react-bootstrap/Button';
import './home.css';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {

    async function loadProducts() {
      const response = await api.get("http://localhost:3000/produtos", {
        params:{
          // Possíveis parâmetros para serem inseridos depois
        }
      })

      setProducts(response.data.slice(0, 16));
    }

    loadProducts();

  }, [])

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

        <h1>Produtos em Destaque</h1>
        <p>Confira nossas recomendações para uma experiência de compra incrível</p>
      </Container>
    </div>
    // <div className='list-products'>
    //   {products.map((product) => {
    //     return(
    //       <div key={product.id}>
    //         <img src={product.imagem}></img>
    //         <p>{product.nome}</p>
    //         <p>{product.preco}</p>
    //         <Link to={`/produtos/${product.id}`}>Acessar</Link>
    //       </div>
    //     )
    //   })}
    // </div>
  );
}

export default Home;