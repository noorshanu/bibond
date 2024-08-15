import Navbar from "./components/Navbar"
import TopBar from "./components/TopBar"
import About from "./sections/About"
import AppFeat from "./sections/AppFeat"
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
   <div>
     <About/>
   </div>

   <AppFeat/>

  </div>
    </>
  )
}

export default App
