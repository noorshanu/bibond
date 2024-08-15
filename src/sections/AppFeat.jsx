import React from "react";

function AppFeat() {
  return (
    <section className=" py-10">
      <div className=" container-wrapper">
        <div className=" flex justify-between items-center">
          <div className=" w-full sm:w-1/2">
            <h1 className=" text-white  text-5xl font-archo ml-[9%]">BiBond App</h1>

            <p className=" flex items-center gap-8 text-white text-2xl py-3">
              {" "}
              <img src="images/arrowL.png" alt="" /> Message anyone
              Decentralisely{" "}
            </p>
            <p className=" flex items-center gap-8 text-white text-2xl py-3">
              {" "}
              <img src="images/arrowL.png" alt="" /> Message anyone
              Decentralisely{" "}
            </p>
            <p className=" flex items-center gap-8 text-white text-2xl py-3">
              {" "}
              <img src="images/arrowL.png" alt="" /> Message anyone
              Decentralisely{" "}
            </p>

          
          </div>

          <div className=" w-full sm:w-1/2">
            <img src="images/app.png" alt="" className=" mx-auto" />
          </div>
        </div>

        <div>
            <h1 className=" text-center text-white font-archo font-bold">Partners</h1>

        </div>
      </div>

      
    </section>
  );
}

export default AppFeat;
