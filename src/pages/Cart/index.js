import { useEffect, useState } from 'react';
import './cart.css';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import imgProductX from '../../assets/product_x.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductCart from '../../components/ProductCart';
import ButtonArrow from '../../components/Buttons/ButtonArrow';

function Cart() {
  const [products, setProducts] = useState([]);
  const textButtonArrow = "Produtos";

  useEffect(() => {
    const myCart = localStorage.getItem("@supermarket");

    setProducts(JSON.parse(myCart) || []);
  }, [])

  function deleteProduct(id) {
    let filterProducts = products.filter( (product) => {
      return (product.id !== id);
    })

    setProducts(filterProducts);
    localStorage.setItem("@supermarket", JSON.stringify(filterProducts));
    toast.success("Produto removido do carrinho!");
  }

  return(
    <div className='cart'>
      <div className='cart__content'>
        <div className='cart__top'>
          <h2>Meu Carrinho</h2>
          {products.length === 0 && <p>Você não possui produtos salvos. Continue explorando para adicionar produtos!</p>}
          {products.length > 0 && <p>Aqui estão os seus produtos salvos. Continue explorando para adicionar mais produtos!</p>}
          <Link to="/produtos" ><ButtonArrow text={textButtonArrow} /></Link>
        </div>
        <div className='cart__img'>
          {products.length === 0 && <img src={imgProductX} alt="Imagem de produtos com um X" />}
        </div>
        <Row className='justify-content-center'>
          {products.map((product) => (
            <Col xs={6} md={2} key={product.id}>
              <ProductCart id={product.id} name={product.nome} price={product.preco} deleteProduct={deleteProduct} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
}

export default Cart;