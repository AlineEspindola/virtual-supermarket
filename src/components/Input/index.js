import Form from 'react-bootstrap/Form';
import './input.css';

function Input({ value, onChange }) {
  return(
    <Form.Control type="search" placeholder="Digite o produto..." arial-label="Search" value={value} onChange={onChange}/>
  )
}

export default Input;