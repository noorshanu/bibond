import { BsTwitterX } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

function Hero() {
  return (
    <section>
        <div className=' container-wrapper'>
            <div>
                 <h1 className=' flex items-center gap-5 font-archo text-xl font-semibold text-white mt-10 mb-6 '> <img src="images/arrowL.png" alt="" /> BIBond ECOSYSTEM <img src="images/arrowR.png" alt="" /></h1>
            </div>

            <div className=' flex  justify-between '>

                <div className=' w-full sm:w-1/2'>
                 <h1 className=' text-[64px] font-dream font-bold text-white '>
                 WE LET YOU TRUST & KEEPS YOU SAFE
                 </h1>

                 <div className=" flex justify-start items-center gap-[10%] my-8">
                 <a href="/" className=" text-4xl text-[#CE5600]">
                    <FaTelegramPlane />
                    </a>
                    <a href="/"  className=" text-3xl text-[#CE5600]">
                    <BsTwitterX />
                    </a>

                 

                    <a href="/" className=" text-4xl text-[#CE5600]">
                    <FaSquareInstagram />
                    </a>
                 </div>

                 <div  className=" flex items-center  gap-4 mt-[3rem]">
                     <img src="images/block.png" alt="" />

                     <img src="images/cert.png" alt="" />
                 </div>

                </div>

                <div className=' w-full sm:w-1/2'>
                <img src="images/hero.png" alt="" />

                </div>

            </div>
        </div>
    </section>
  )
}

export default Hero