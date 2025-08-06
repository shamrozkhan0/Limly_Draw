import React from 'react'
import footerLogo from '../assets/footer-logo.png'
import { FaPhone, FaTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router';
import playStoreImg from '../assets/playstore.png';
import appStoreImg from '../assets/appstore.png';


import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";



export const Footer = () => {
    return (
        <>
            <div className="footer-main">
                <div className="container">
                    <div className="footer-flex">
                        <div className="footer-col w-40">
                            <img src={footerLogo} alt="" />
                            <h2>Limly Draw</h2>
                            <p>A modern collaborative whiteboard built for teams, creators, and thinkers.
                                Sketch, share, and simplify — all in real-time.</p>
                                <ul>
                                    <li><span><Link to="#" ><FaPhone /> (888) 1234-5678</Link></span></li>
                                    <li> <span><Link to="#"><MdEmail /> info@limlydraw.com</Link></span></li>
                                </ul>

                                <div className="logo-flex">
                                    <Link to='#'><img src={playStoreImg} alt="" /></Link>
                                    <Link to='#'><img src={appStoreImg} alt="" /></Link>
                                </div>
                        </div>
                        <div className="w-20">
                            <h3>Useful Links</h3>
                            <ul>
                                <li><Link>Features</Link></li>
                                <li><Link>About</Link></li>
                                <li><Link>Service</Link></li>
                                <li><Link>Team</Link></li>
                            </ul>
                        </div>

                                                <div className="w-20">
                            <h3>Help & Support</h3>
                            <ul>
                                <li><Link>FAQ</Link></li>
                                <li><Link>Blog</Link></li>
                                <li><Link>COntact Us</Link></li>
                                <li><Link>Support</Link></li>
                            </ul>
                        </div>


                                                <div className="w-20">
                            <h3>Resources</h3>
                            <ul>
                                <li><Link>Guides and resources</Link></li>
                                <li><Link>Our Policy</Link></li>
                                <li><Link>Tools</Link></li>
                                <li><Link>Privacy & Security</Link></li>
                            </ul>
                        </div>

                    </div>

                    <div className="policy-flex">
                        <p>© All Right Reserved, Developed By Murtaza Siddiqui & Shamroz Khan</p>
                        <ul>
                            <li><Link><FaInstagram /></Link></li>
                            <li><Link><FaXTwitter /></Link></li>
                            <li><Link>< FaFacebookF /></Link></li>
                            <li><Link><FaLinkedinIn  /></Link></li>

                        </ul>
                    </div>
                </div>{/**container**/}
            </div>{/**main**/}
        </>
    )
}

export default Footer