import Logo from '../../assets/logo.png';
import personImg from '../../assets/person.png';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ButtonArrow from '../../components/Buttons/ButtonArrow';
import './footer.css';

function Footer() {
  const textButtonArrow = "Contatar";

  return(
    <footer id="footer">
      <div className='footer__content bg-light'>
        <div className='col-1'>
          <Navbar.Brand href="/"><img src={Logo}></img></Navbar.Brand> 
          <ButtonArrow text={textButtonArrow} />
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
          <img src={personImg} />
        </div>
      </div>
    </footer>
  )
}

export default Footer;