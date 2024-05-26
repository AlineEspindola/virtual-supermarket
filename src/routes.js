import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/Product-Details';
import Cart from './pages/Cart';
import Header from './components/Header';
import Footer from './components/Footer';
import Error from './pages/Error';

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/produtos" element={ <Products/> } />
        <Route path="/produto/:id" element={ <ProductDetails/> } />
        <Route path="/carrinho" element={ <Cart/> } />
        <Route path="*" element={ <Error/> } />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default RoutesApp;