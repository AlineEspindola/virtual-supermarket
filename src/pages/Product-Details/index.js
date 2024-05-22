import { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';

import Loading from '../../components/Loading';
import ButtonIcon from '../../components/Buttons/ButtonIcon';
import Icon from '../../components/Icon';

import api from '../../services/api-connection';

import './product-details.css';

function ProductDetails() {
  const { id } = useParams();
  const navigation = useNavigate();
  const [product, setProduct] = useState(null); 
  const [loading, setLoading] = useState(true);
  const iconCart = "fas fa-shopping-cart icon";
  const iconYoutube = "fab fa-youtube icon";
  const textButtonIcon = "Adicionar";

  useEffect(() =>  {
    async function loadProduct() {
      try {
        const response = await api.get(`http://localhost:3000/produtos?id=${id}`);
        if (response.data && response.data.length > 0) {
          setProduct(response.data[0]); // Por erro de itens duplicados, há esse tratamento
          setLoading(false); 
        } else {
          navigation("/", { replace: true } );
          return;
        }
      } catch (error) {
        console.log("Erro ao carregar o produto:", error);
        setLoading(false); 
      }
    }

    loadProduct();
  }, [navigation, id]); 

  if (loading) {
    return <Loading />;
  }

  if (!product) {
    return <div>Nenhum produto encontrado.</div>; 
  }

  return (
    <div className="product-details bg-light">
      <div className="product-details__content">
        <div className="product-details__img">
          <img src={require(`../../assets/products/${product.id}.png`)} alt={product.nome} />
        </div>
        <div className="product-details__text">
          <div className="product-details__name">
            <h2>{product.nome}</h2>
          </div>
          <div className="product-details__category">
            <p>{product.categoria}</p>
          </div>
          <div className="product-details__price">
            <h4>R${product.preco}</h4>
            <p>por {product.tipo_embalagem.toLowerCase()}</p>
          </div>
          <div className="product-details__button">
            <ButtonIcon icon={iconCart} text={textButtonIcon} />
            <a target="blank" href={`https://youtube.com/results?search_query=Receita com ${product.nome}`} >
              <Icon icon={iconYoutube}/>
            </a>
          </div>
          <div className="product-details__descriptions">
            <h3>Ingredientes</h3>
            <p>{product.ingredientes}</p>
            <h3>Informações Nutricionais</h3>
            <p>Calorias: {product.informacoes_nutricionais.calorias}, gorduras: {product.informacoes_nutricionais.gorduras}, carboidratos: {product.informacoes_nutricionais.carboidratos}, proteinas: {product.informacoes_nutricionais.proteinas}</p>
            <h3>Peso</h3>
            <p>{product.peso}</p>
            <h3>Data de validade</h3>
            <p>{product.data_validade}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
