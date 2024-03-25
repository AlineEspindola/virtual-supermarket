import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading';
import api from '../../services/api-connection';

function Product() {
  const { id } = useParams();
  const { product, setProduct } = useState({});
  const { loading, setLoading } = useState(true);

  useEffect(() => {
    async function loadProduct() {
      await api.get(`/produto/${id}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch(() => {

      });
    }

    loadProduct();
  }, []);

  if(loading) {
    return (
      <Loading/>
    );
  }

  return(
    <div>
      {product.nome}
    </div>
  );
}

export default Product;