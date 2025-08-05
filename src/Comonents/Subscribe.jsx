import SubscribeImage from '../assets/subs-image.png'
import { FaArrowRight } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export const Subscribe = ()=> {
    return (
        <>
            <div className="subscribe-main">
                <div className="container">
                    <div className="sub-flex">
                        <div className="sub-col-40">
                        <h2>Safe, Secure & Ready to Use</h2> 
                        <p>Get started instantly with confidence. Limly Draw is lightweight, fully secure, and completely free of hidden malware — so you can focus on creating, not troubleshooting.</p>

                        <h4>Subscribe to newsletter</h4>
                        <div className="form-control-news">
                            <span className="msg-icon"><HiOutlineMail /></span>
                            
                            <input type="email" name="email" id="" placeholder='Enter Your Email....' />
                            <span className="btn-email"><FaArrowRight /></span>
                        </div>
                        </div>

                        <div className="sub-col-60">
                            
                             <img src={SubscribeImage} alt="" />   
                        </div>
                    </div>
                </div>{/**container**/}
            </div>{/**main**/}
        </>
    )
}