import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home/>} />
        <Route path="/produtos" element={ <Products/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;