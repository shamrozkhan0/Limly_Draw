import { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'

const Main = () => {

  const [loading, setLoading] = useState(true) // Default: The DOM is loading
  const [render, setRender] = useState(false) // Default: The Components is not render 


 useEffect(() => {
    const handleLoad = () => {
      console.log("DOM and resources fully loaded");
      setLoading(false);

      // Wait 500ms after DOM is ready
      setTimeout(() => {
        setRender(true);
      }, 500);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <BrowserRouter>
      < App DOMLoaded={render} />
    </BrowserRouter>
  )
}


createRoot(document.getElementById('root')).render(<Main />)

