import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Header from './components/Header'
import Error from './pages/Error'

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={ <Home/>} />
        <Route path="/produtos" element={ <Products/>} />
        <Route path="*" element={ <Error/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;