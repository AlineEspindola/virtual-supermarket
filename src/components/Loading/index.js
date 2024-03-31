import Spinner from 'react-bootstrap/Spinner';
import './loading.css';

function Loading() {
  return (
    <div className="d-flex justify-content-center align-items-center spinner-body" style={{ height: '75vh' }}>
        <Spinner animation="border" role="status" className='spinner'>
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
  );
}

export default Loading;