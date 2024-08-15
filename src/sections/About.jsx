import React from "react";

function About() {
  return (
    <section className=" py-6">
      <div className=" container-wrapper">
        <div className=" flex items-center justify-between">
          <div className="w-full sm:w-1/2">
            <img src="images/about.png" alt="" className=" mx-auto" />
          </div>

          <div className=" w-full sm:w-1/2">
            <div></div>
            <h2 className=" text-white text-4xl">
              <span className=" text-5xl font-bold text-[#CE5600] font-archo">BiBond</span>{" "}
              uses Web3 tech to enhance trust with an Agreement Dashboard,
              Decentralized Messaging, and Support System for partners, friends
              and couples.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
