import './product.css'

function Product({ image, name, price }) {
  return(
    <div className='product'>
      <div className='product__image'>
        <img src={image} />
      </div>
      <div className='product__text'>
        <h3>{name}</h3>
        <h4>R${price}</h4>
      </div>
    </div>
  );
}

export default Product;