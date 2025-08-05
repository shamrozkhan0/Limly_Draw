import partnerOne from '../assets/partner-1.png';
import partnerTwo from '../assets/partner-2.png';
import partnerThree from '../assets/partner-3.png';
import partnerFour from '../assets/partner-4.png';


export const Partners = () => {
  return (
    <div className='partner-main'>
        <div className="container">
            <div className="partner-inner">
                <img src={partnerOne} alt="" srcset="" />
                <img src={partnerTwo} alt="" srcset="" />
                <img src={partnerThree} alt="" srcset="" />
                <img src={partnerFour} alt="" srcset="" />


            </div>{/**inner**/}
        </div>{/**COntainer**/}
    </div>/**main**/
  )
}
