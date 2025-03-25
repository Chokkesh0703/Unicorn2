import React from 'react'
import logo from "./../assets/logo/mlogo.png";

import facebook from "../assets/medialogo/facebook.svg"
import insta from "../assets/medialogo/insta.svg"
import linkdin from "../assets/medialogo/link.svg"
import tedx from "../assets/medialogo/tedx.svg"

const Footer = () => {
  return (
    <div>
    <div className='flex  lg:flex-row flex-col gap-20 lg:gap-0 '>
      <div className="flex flex-col px-10 lg:w-1/2 lg:px-30 justify-center gap-10 ">
        <div className="flex flex-col w-[218px] h-[118px]  bg-contain bg-no-repeat container m-auto lg:m-0">
          <img src={logo} alt="logo" className='w-full h-full' />
        </div>
        <div className="">
          <p className='text-[#FFFFFF] lg:text-[25px] font-[Poppins, normal] font-extralight  '>"Ready to bring your creative vision to life? Our team at The Unicorn Pictures is eager to hear from you. Whether you're seeking stunning photography, captivating animation, or have a unique project in mind, we're here to help.</p>
        </div>
      </div>
      <div className="flex flex-col text-[#FFFFFF] font-[Rubik] text-[10px] md:text-[20px] lg:text-[30px] justify-center px-10 lg:w-3/5 gap-10 overflow-hidden">
        <div className="flex flex-row md:gap-60 px-10 gap-20 items-center">
          <p>Ph no:</p>
          <p>+91 9620425828</p>
        </div>
        <div className="flex flex-row md:gap-50 gap-10 px-10">
          <p>Address:</p>
          <p>2nd floor, 71, 15th Cross Rd, Dollar Layout, 3rd Phase, J. P. Nagar, Bengaluru, Karnataka 560078</p>
        </div>
        <div className="flex flex-col lg:flex-row lg:gap-40 gap-8 px-10">
          <p>Follow Us:</p>
          <div className='flex flex-row md:gap-10 gap-4'>
          <img src={facebook} alt="facebook" />
        <img src={insta} alt="instagram" />
        <img src={tedx} alt="twitter" />
        <img src={linkdin} alt="linkdin" />
          </div>
        </div>
      </div>
    </div>
    <div className='text-[#ffff] text-[20px] flex justify-center items-center mt-20 pb-10'>
      <span>&copy;</span>
      <p>Copyright 2025, All Rights Reserved</p>
    </div>
    </div>
  )
}

export default Footer
