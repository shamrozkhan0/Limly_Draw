import logo from '../assets/logo.png'
import Spinner from 'react-bootstrap/Spinner';

const Loader = () => {
  
  return (
    <div className='vw-100 vh-100 d-flex flex-column column align-items-center justify-content-center text-center fs-70'>
        <img src={logo} alt="" />
          <Spinner animation="border" variant="dark" size="lg" />
    </div>
  )
}

export default Loader