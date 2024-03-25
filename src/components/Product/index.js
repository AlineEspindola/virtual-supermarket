import { Link } from 'react-router-dom';
import './product.css';

function Product({ id, image, name, price }) {
  return(
    <div className='product'>
      <div className='product__image'>
        <img src={image} />
      </div>
      <div className='product__text'>
        <h3>{name}</h3>
        <h4>R${price}</h4>
      </div>
      <Link to={`/produto/${id}`}>Veja</Link>
    </div>
  );
}

export default Product;