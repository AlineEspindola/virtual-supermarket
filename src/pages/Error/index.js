import imageError from '../../assets/error.png';

function Error() {
  return(
    <div className="d-flex justify-content-center align-items-center" alt="Erro 404">
      <img style={{ height: '75vh' }} src={imageError} />
    </div>
  );
}

export default Error;