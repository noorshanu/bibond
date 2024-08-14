import Navbar from "./components/Navbar"
import TopBar from "./components/TopBar"
import Hero from "./sections/Hero"


function App() {


  return (
    <>
  <div className=" main">

   <div className=" hero-bg">
    <TopBar/>
   <Navbar/>
   <Hero/>
   </div>

  </div>
    </>
  )
}

export default App
