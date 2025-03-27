import React from "react";
import sidepic from "./../assets/sidepic/image.png";

const Home = () => {
  return (
    <div id="Home" className="flex  flex-col gap-10 lg:flex-row lg:gap-20  lg:w-full h-12/12 md:pt-0 lg:p-30 lg:pt-15   md:p-5 md:ml-20 lg:ml-0 p-1 overflow-hidden">
        <div className="flex flex-col mt-15 md:mt-40 lg:mt-40 gap-5 md:gap-15 md:ml-15 lg:ml- ml-8 lg:w-[50vw] ">
        <h1 className="text-white lg:text-7xl font-Georgia md:text-7xl text-4xl xl:text-5xl 2xl:text-7xl">
          Elevate Your Vision
        </h1>
        <p className="text-[#FFFFFFCC] mr-10 md:text-[20px] md:mr-20 font-Poppins  lg:font-light">
              Step into a world where imagination knows no bounds. We blend <br />
              cutting-edge technology with artistic vision to create truly <br />
              magical visual experiences. Let The Unicorn Pictures transform <br />
              your story into an unforgettable journey.
        </p>
        <button className="bg-[#D6B962] text-[#0E1320] flex  font-medium rounded-full w-16 h-6 justify-center items-center hover:bg-yellow-600 gap-2 md:w-32 md:h-9 md:gap-2 ">
            <span className=" text-[5px] ml-2 md:text-[15px] md:ml-2 font-bold ">Read More</span>
            <div className="bg-white rounded-full p-2">
              <svg
                className="w-2 h-2 md:w-4 md:h-4 text-yellow-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </div>
          </button>
          </div>
       
       <div
          className=" bg-no-repeat  bg-cover md:h-[700px] md:w-[700px]  lg:h-[700px] lg:w-[650px]  h-[500px] relative  "
        >
          <img src={sidepic} alt="" className="w-full h-full" />
            
            <div className="absolute bottom-6 p-10 md:p-20 md:bottom-0  xl:p-10 2xl:p-10 font-Poppins ">
              <h2 className="text-[35px] md:text-[40px] font-light  text-[#ffff] mb-2 ">
                8.2
              </h2>
              <div className="flex items-center md:gap-2 ">
                <i className="fas fa-star text-yellow-500"></i>
                <i className="fas fa-star text-yellow-500"></i>
                <i className="fas fa-star text-yellow-500"></i>
                <i className="fas fa-star text-yellow-500"></i>
                <i className="fas fa-star-half-alt text-yellow-500"></i>
              </div>
              <h3 className="text-[25px] lg:text-[30px] md:text-[40px] mt-3 text-[#FFFFFF] ">
                New releases and exclusive originals updated weekly
              </h3>
              <p className="text-[12px] lg:text-[18px] md:text-[20px] mt-3  text-[#FFFFFFCC]">
                Snow White premiered at Alcázar de Segovia in Segovia, Spain on
                March 12, 2023, and is scheduled to be released in theaters in
                the United States by Walt Disney Studios Motion Pictures on
                March 21, 2025.
              </p>
            </div>
        </div>
    
    </div>
  );
};

export default Home;
