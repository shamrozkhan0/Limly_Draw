import React from 'react'
import Banner from '../Comonents/Banner'
import Navbar from '../Comonents/Navbar'
import Partners from '../Comonents/Partners'
import Work from '../Comonents/Work'
import Secure from '../Comonents/Secure'
import Choose from '../Comonents/Choose'
import { Subscribe } from '../Comonents/Subscribe'
import Stats from '../Comonents/Stats'
import ProductPreview from '../Comonents/ProductPreview'
import Testimonials from '../Comonents/Testimonials'
import Footer from '../Comonents/Footer'

function LandingPage() {
  return (
      <>
            <Navbar />
        <Banner />
        <Partners />
        <Work />
        <Secure />
        <Choose />
        <Subscribe />
        <Stats />
        <ProductPreview />
        <Testimonials />
        <Footer />

    </>
  )
}

export default LandingPage