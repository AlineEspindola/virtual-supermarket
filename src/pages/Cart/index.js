import { useEffect, useState } from 'react';
import './cart.css';
import { toast } from 'react-toastify';

function Cart() {
  const [products, setProducts] = useState([]);

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
    <div>
      <h1>Tela do carrinho</h1>

      {products.length === 0 && <span>Você não possui produtos no carrinho</span>}

      <ul>
        {products.map((product) => {
          return(
            <li key={product.id}>
              <span>{product.nome}</span>
              <button onClick={() => deleteProduct(product.id)} >Excluir</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Cart;