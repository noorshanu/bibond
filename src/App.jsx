import Navbar from "./components/Navbar"
import TopBar from "./components/TopBar"
import About from "./sections/About"
import AppFeat from "./sections/AppFeat"
import Feature from "./sections/Feature"
import Hero from "./sections/Hero"
import Token from "./sections/Token"


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

   <div className=" py-8">
    <Token/>
   </div>

  </div>
    </>
  )
}

export default App
