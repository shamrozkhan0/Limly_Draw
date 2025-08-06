import './App.css'
import Banner from './Comonents/Banner'
import Navbar from './Comonents/Navbar'
import Loader from './Comonents/Loader'
import Partners from './Comonents/Partners'
import Work from './Comonents/Work'
import Secure from './Comonents/Secure'
import Choose from './Comonents/Choose'
import { Subscribe } from './Comonents/Subscribe'
import Stats from './Comonents/Stats'
import ProductPreview from './Comonents/ProductPreview'
import Testimonials from './Comonents/Testimonials'




// Here comes the components which have to render's after DOM loaded
const ComponentWrapper = () => {
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
      </>
    )
  }

function App({ DOMLoaded }) {
    return (
      <>
        {DOMLoaded ? <ComponentWrapper /> : <Loader />}
      </>
    )
  }

export default App