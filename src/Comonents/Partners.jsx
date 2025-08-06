import partnerOne from '../assets/partner-1.png';
import partnerTwo from '../assets/partner-2.png';
import partnerThree from '../assets/partner-3.png';
import partnerFour from '../assets/partner-4.png';


const Partners = () => {
  return (
    <div className='partner-main'>
        <div className="container">
            <div className="partner-inner">
                <img src={partnerOne} alt="" srcSet="" />
                <img src={partnerTwo} alt="" srcSet="" />
                <img src={partnerThree} alt="" srcSet="" />
                <img src={partnerFour} alt="" srcSet="" />


            </div>{/**inner**/}
        </div>{/**COntainer**/}
    </div>/**main**/
  )
}


export default Partners