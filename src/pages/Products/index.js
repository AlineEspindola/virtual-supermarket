import { useEffect, useState } from 'react';
import api from '../../services/api-connection';
import CategoryButton from '../../components/Category';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from '../../components/Product';
import Loading from '../../components/Loading';
import './products.css';

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategories, setActiveCategories] = useState([]);

  useEffect(() => {
    loadProducts();
  }, [activeCategories]);

  const loadProducts = async () => {
    try {
      let productsDataArray;

      if (activeCategories.length === 0) {
        const response = await api.get("http://localhost:3000/produtos");
        productsDataArray = [response.data];
      } else {
        const promises = activeCategories.map(async category => {
          const response = await api.get("http://localhost:3000/produtos", {
            params: {
              categoria: category
            }
          });
          return response.data;
        });
        
        productsDataArray = await Promise.all(promises);
      }
    
      const mergedProducts = productsDataArray.flat();

      setProducts(mergedProducts);
      setLoading(false);
    } catch (error) {
      console.error('Erro ao carregar produtos:', error);
      setProducts([]);
      setLoading(false);
    }
  };

  const handleCategoryClick = (category) => {
    setActiveCategories((prevCategories) => {
      if (prevCategories.includes(category)) {
        console.log(activeCategories);
        return prevCategories.filter((cat) => cat !== category);
      } else {
        console.log(activeCategories);
        return [...prevCategories, category];
      }
    });
  };

  const categories = [
    "Bebidas",
    "Carnes e Aves",
    "Condimentos",
    "Congelados",
    "Descartáveis",
    "Doces",
    "Especiarias e Temperos",
    "Frutas e Vegetais",
    "Grãos",
    "Laticínios",
    "Padaria",
    "Produtos de Higiene Pessoal",
    "Produtos de Limpeza",
    "Snacks",
    "Suplementos Alimentares"
  ];

  if (loading) {
    return (
      <Loading/>
    );
  }

  return (
    <div className='products'>
      <div className='products__content'>
        <div className='products__categories'>
          {categories.map((category) => (
            <CategoryButton 
              key={category}
              text={category} 
              isActive={activeCategories.includes(category)}
              onClick={() => handleCategoryClick(category)}
            />
          ))}
        </div>
        <div className='products__cards'>
          <Row className='justify-content-center'>
            {products.map((product) => (
              <Col xs={6} md={2} key={product.id}>
                <Product id={product.id} name={product.nome} price={product.preco} />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Products;
