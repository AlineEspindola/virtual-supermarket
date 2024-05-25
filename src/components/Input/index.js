import Form from 'react-bootstrap/Form';
import './input.css';

function Input({ value, onChange, onKeyDown }) {
  return(
    <Form.Control type="search" placeholder="Digite o produto..." arial-label="Search" value={value} onChange={onChange} onKeyDown={onKeyDown}/>
  )
}

export default Input;