import Logo from '../../assets/logo.png';
import personImg from '../../assets/person.png';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import ButtonArrow from '../../components/Buttons/ButtonArrow';
import './footer.css';

function Footer() {
  const textButtonArrow = "Contatar";

  return(
    <footer id="footer">
      <div className='footer__content bg-light'>
        <div className='col-1'>
          <Navbar.Brand href="/"><img src={Logo} alt="Imagem da logo"></img></Navbar.Brand> 
          <Link target="blank" to="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=alineabreuespindola@gmail.com" ><ButtonArrow text={textButtonArrow} /></Link>
        </div>
        <div className='col-2'>
          <ul>
            <li>Institucional</li>
            <li>Sobre Nós</li>
            <li>Política de Privacidade</li>
            <li>Termos de Uso</li>
            <li>Cookies</li>
          </ul>
        </div>
        <div className='col-3'>
          <ul>
            <li>Trabalhe Conosco</li>
            <li>Como trabalhar Conosco</li>
          </ul>
        </div>
        <div className='col-4'>
          <ul>
            <li>Ajuda</li>
            <li>Mapa do site</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className='col-5'> 
          <img src={personImg} alt="Imagem de um homem segurando uma sacola de produtos" />
        </div>
      </div>
    </footer>
  )
}

export default Footer;