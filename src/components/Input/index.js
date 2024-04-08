import Form from 'react-bootstrap/Form';
import './input.css';

function Input() {
  return(
    <Form.Control type="search" placeholder="Digite o produto..." aria-label="Search"/>
  )
}

export default Input;