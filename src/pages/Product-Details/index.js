import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading';
import api from '../../services/api-connection';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null); 
  const [loading, setLoading] = useState(true);

  useEffect(() =>  {
    async function loadProduct() {
      try {
        const response = await api.get(`http://localhost:3000/produtos?id=${id}`);
        if (response.data && response.data.length > 0) {
          setProduct(response.data[0]); // Por erro de itens duplicados, há esse tratamento
          setLoading(false); 
        } else {
          console.log("Nenhum produto encontrado com o ID:", id);
          setLoading(false); 
        }
      } catch (error) {
        console.log("Erro ao carregar o produto:", error);
        setLoading(false); 
      }
    }

    loadProduct();
  }, [id]); 

  if (loading) {
    return <Loading />;
  }

  if (!product) {
    return <div>Nenhum produto encontrado.</div>; 
  }

  return (
    <div>
      <h1>Thiago ama {product.nome}</h1>
    </div>
  );
}

export default ProductDetails;
