import secureImg from '../assets/secure.png'

const Secure = ()=> {
  return (
    <>
    <div className="secure-main">
        <div className="container">
            <div className="secure-flex">
                <div className="secure-col-40">
                  <h2>Stronger Security, Smarter Protection</h2>
                  <p>Experience a new level of confidence with enhanced security features designed to protect your data and ensure peace of mind — because real strength begins with real protection.</p>

                  <h4>Well Organised User Interface</h4>
                  <span className='mb-30'>Enjoy a seamless and intuitive interface that keeps everything in the right place — making collaboration and creativity feel effortless.</span>

                  <h4>Completely Bug-Free Experience</h4>
                  <span>Built for reliability, Limly Draw delivers a smooth, error-free experience so you can focus on drawing, not debugging.</span>
                </div>
                <div className="secure-col-60">
                    <img src={secureImg} alt=""  />  
                </div>
            </div>
        </div>{/**container**/}
    </div>{/**main**/}
    </>
  )
}

export default Secure