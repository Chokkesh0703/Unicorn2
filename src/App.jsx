
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Movie from "./components/Movie"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import './App.css'


function App() {
  

  return (
    <>
      <div className=' bg-[url("./assets/background/Flexs.svg")] bg-no-repeat bg-cover h-full  '>
      <div className='bg-[url("./assets/background/backimage.png")]  bg-no-repeat lg:bg-cover bg-center   '>
        <Navbar/>
        <Home/>   
      </div >
      <div className=''>
        <About/>
        <Movie/>
        <Contact/>
        <Footer/>
      </div>
      </div> 
    </>
  )
}

export default App
