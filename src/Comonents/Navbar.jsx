import { Link } from 'react-router'
import { FaArrowRightLong } from "react-icons/fa6";

import logo from '../assets/logo.png'
const Navbar = () => {
  return (
    <>
    <div className="my-nav">
    <div className="container">
      <div className="navbar">
    <div className="logo">
      <Link>
        <img src={logo} alt="" srcSet="" />
      </Link>
    </div>
    <div className="nav-links">
      <ul>
        <li><Link to="#" >Home</Link></li>
        <li><Link to="#" >About Us</Link></li>
        <li><Link to="#" >Pricing</Link></li>
        <li><Link to="#" >Portfolio</Link></li>
        <li><Link to="#" >Blog</Link></li>
        <li><Link to="#" >Contact</Link></li>
      </ul>
      <button  className='btn-start'>Get Started <FaArrowRightLong /></button>
    </div>
  </div>
  </div>{/* {container} */}
  </div>{/* {MAin} */}
    </>
  )
}

export default Navbar