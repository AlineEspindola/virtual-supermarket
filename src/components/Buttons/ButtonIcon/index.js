import Button from 'react-bootstrap/Button';
import './buttonIcon.css';

function ButtonIcon( { onClick, icon, text} ) {
  return (
    <div className='buttonicon__content'>
      <Button onClick={onClick} ><span className={icon}></span>{text}</Button>
    </div>
  )
}

export default ButtonIcon;