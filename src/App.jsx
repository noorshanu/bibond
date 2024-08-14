import Navbar from "./components/Navbar"
import TopBar from "./components/TopBar"
import Feature from "./sections/Feature"
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

   <Feature/>

  </div>
    </>
  )
}

export default App
