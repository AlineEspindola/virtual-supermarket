import './icon.css';

function Icon( {icon, onClick} ) {
  return(
    <div className="icon__content">
      <div onClick={onClick} className={icon}></div>
    </div>
  );
}

export default Icon;