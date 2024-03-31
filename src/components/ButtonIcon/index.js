import Button from 'react-bootstrap/Button';
import './buttonIcon.css';

function ButtonIcon( {icon, text} ) {
  return (
    <div className='buttonicon__content'>
      <Button><span className={icon}></span>{text}</Button>
    </div>
  )
}

export default ButtonIcon;