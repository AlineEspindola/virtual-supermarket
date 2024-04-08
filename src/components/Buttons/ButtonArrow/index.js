import Button from 'react-bootstrap/Button';
import './buttonArrow.css';

function ButtonArrow( {text} ) {
  return (
    <div className='buttonarrow__content'>
      <Button>{text} <span className='fas fa-arrow-right'></span></Button>
    </div>
  )
}

export default ButtonArrow;