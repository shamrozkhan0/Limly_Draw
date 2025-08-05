import React from 'react'
import chooseImg from '../assets/choosemain.png'
import { ChooseStep } from '../Constants'

const Choose = () => {
  return (
    <>
    <div className="choose-main">
        <div className="container">
            <h2>Why Will You Choose Us</h2>
            <p>Collaborate seamlessly and stay organized with a platform designed for modern teams. Limly Draw makes it easy to bring your ideas to life — clearly, creatively, and without distraction.</p>
            <img src={chooseImg} alt="" />

            <div className="choose-flex">
                {
                    ChooseStep.map(({id, title, txt, imageIcon})=>(
               <div key={id} className="choose-col">
                    <img src={imageIcon} alt="" />
                    <h3> {title} </h3>
                    <p>{txt}</p>

                </div> 
                    ))
                }

            </div>{/**main**/}
        </div>
    </div>
    </>
  )
}

export default Choose