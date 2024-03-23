import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Header from './components/Header'

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={ <Home/>} />
        <Route path="/produtos" element={ <Products/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;