import { Link } from 'react-router'
import bannerImg from '../assets/banner-img.png'
import { FaArrowRightLong, FaCheck } from "react-icons/fa6";
const Banner = () => {
  return (
    <div className="banner">
    <div className="container">
    <div className="banner-flex">
         <div className="banner-col-60">
            <h1>Where Innovation Meets Intelligent Thinking.</h1>
            <p>We build strong foundations through trusted partnerships, driving forward with bold ideas and thoughtful execution.</p>

            <div className="btn-flex">
            <Link className='ban-btn'>Discover More <FaArrowRightLong /></Link>
            <Link className='ban-explore'>Explore Service <FaArrowRightLong /></Link>
            </div>

            <ul className="benefits">
                <li> <span className="colorcheck"><FaCheck /></span> Get 15 days free trial</li>
                <li> <span className="colorcheck"><FaCheck /></span> No credit card is required</li>
                <li> <span className="colorcheck"><FaCheck /></span> Cancel anytime</li>

            </ul>
        </div>{/***col***/}

        <div className="banner-col-40">
            <img src={bannerImg} alt="" srcset="" />
        </div>{/***col***/}   
    </div>
    </div>{/**container**/}
    </div>/**main**/
  )
}

export default Banner