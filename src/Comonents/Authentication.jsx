import React from 'react'
import Login from "./Feature/Login.jsx"
import { Routes, Route } from 'react-router'
import { Outlet } from 'react-router'

import AuthenticationImage from '../assets/login-image.jpg'

const Authentication = () => {
  return (
    <div className="container-fluid vw-100 vh-100">
        <div className="row h-100 ">
          <div className="col-7 bg-blue h-100 d-flex align-items-center justify-content-center">
            <img src={AuthenticationImage} alt="" />
          </div>
          <div className="col-5 h-100 d-flex align-items-center justify-content-center">
            <Outlet/>
          </div>
        </div>
    </div>
    // <Login/>
  )
}

export default Authentication