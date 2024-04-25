import { Link } from 'react-router-dom';

import Icon from '../Icon';

import './product.css';

function Product({ id, name, price }) {
  const iconCart = "fas fa-cart-plus icon"; // Para componente de icon, deve haver classe icon para aplicar o estilo corretamente

  return(
    <Link to={`/produto/${id}`} className="product-link">
      <div className='product bg-light'>
        <div className='product__image'>
          <img src={require(`../../assets/products/${id}.png`)} alt={name} />
        </div>
        <div className='product__text'>
          <h3>{name}</h3>
        </div>
        <div className='product__subtexto'>
          <h4>R${price}</h4>
          <Icon icon={iconCart}/>
        </div>
      </div>
    </Link>
  );
}

export default Product;