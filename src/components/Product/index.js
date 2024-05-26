import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";
import api from '../../services/api-connection';
import Icon from '../Icon';
import './product.css';

function Product({ id, name, price }) {
  const [product, setProduct] = useState(null); 
  const iconCart = "fas fa-cart-plus icon"; // Para componente de icon, deve haver classe icon para aplicar o estilo corretamente

  useEffect(() =>  {
    async function loadProduct() {
      try {
        const response = await api.get(`http://localhost:3000/produtos?id=${id}`);
        if (response.data && response.data.length > 0) {
          setProduct(response.data[0]); // Por erro de itens duplicados, há esse tratamento
        }
      } catch (error) {
        console.log("Erro ao carregar o produto:", error);
      }
    }

    loadProduct();
  }, [id]); 

  function addCart() {
    const myListCart = localStorage.getItem("@supermarket");

    let productsSaved = JSON.parse(myListCart) || [];

    const hasProduct = productsSaved.some( (productsSaved) => productsSaved.id === product.id )

    if(hasProduct) {
      toast.warn("Este produto já foi adicionado ao carrinho!")
      return;
    }

    productsSaved.push(product);
    localStorage.setItem("@supermarket", JSON.stringify(productsSaved));
    toast.success("Produto adicionado ao carrinho!")
  }

  return(
    <div className="product-link">
      <div className='product bg-light'>
        <Link to={`/produto/${id}`}>
          <div className='product__image'>
            <img src={require(`../../assets/products/${id}.png`)} alt={name} />
          </div>
        </Link>
        <div className='product__text'>
          <h3>{name}</h3>
        </div>
        <div className='product__subtexto'>
          <h4>R${price}</h4>
          <Icon onClick={addCart} icon={iconCart}/>
        </div>
      </div>
    </div>
  );
}

export default Product;