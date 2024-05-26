import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";

import Icon from '../Icon';

import './productCart.css';

function Product({ id, name, price, deleteProduct }) {
  const iconTrash = "fas fa-trash icon";

  return(
    <div className="product-cart-link">
      <div className='product-cart bg-light'>
        <Link to={`/produto/${id}`}>
          <div className='product-cart__image'>
            <img src={require(`../../assets/products/${id}.png`)} alt={name} />
          </div>
        </Link>
        <div className='product-cart__text'>
          <h3>{name}</h3>
        </div>
        <div className='product-cart__subtexto'>
          <h4>R${price}</h4>
          <Icon onClick={() => deleteProduct(id)} icon={iconTrash}/>
        </div>
      </div>
    </div>
  );
}

export default Product;