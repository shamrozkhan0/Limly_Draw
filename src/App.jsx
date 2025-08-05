import './App.css'
import Banner from './Comonents/Banner'
import Navbar from './Comonents/Navbar'


// Here comes the components which have to render's after DOM loaded
const ComponentWrapper = () => {
    return (
      <>
        <Navbar />
        <Banner />
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