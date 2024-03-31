import './icon.css';

function Icon( {icon} ) {
  return(
    <div className="icon__content">
      <div className={icon}></div>
    </div>
  );
}

export default Icon;