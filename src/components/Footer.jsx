import React from "react";
import logo from "./../assets/logo/mlogo.png";

import facebook from "../assets/medialogo/facebook.svg";
import insta from "../assets/medialogo/insta.svg";
import linkdin from "../assets/medialogo/link.svg";
import tedx from "../assets/medialogo/tedx.svg";

const Footer = () => {
  return (
    <div id="Footer">
      <div className="flex   lg:flex-row flex-col  lg:gap-0 pt-5 w-full">
        <div className="flex flex-col  lg:px-30  gap-10  w-full ">
          <div className="flex flex-col w-[218px] h-[118px]  bg-contain bg-no-repeat  lg:m-0">
            <img src={logo} alt="logo" className="w-full h-full" />
          </div>
          <div className="">
            <p className="text-[#FFFFFF] lg:text-[25px] font-Popins font-light  ">
              "Ready to bring your creative vision to life? Our team at The
              Unicorn Pictures is eager to hear from you. Whether you're seeking
              stunning photography, captivating animation, or have a unique
              project in mind, we're here to help.
            </p>
          </div>
        </div>
        <div className="flex flex-col text-[#FFFFFF] font-[Rubik] text-[10px] md:text-[20px] lg:text-[30px] justify-center   gap-10 overflow-hidden  w-full">
          <div className="flex flex-row md:gap-45  gap-15 ">
            <p>Ph no:</p>
            <p>+91 9620425828</p>
          </div>
          <div className="flex flex-row md:gap-35 gap-10 ">
            <p>Address:</p>
            <p>
              2nd floor, 71, 15th Cross Rd, Dollar Layout, 3rd Phase, J. P.
              Nagar, Bengaluru, Karnataka 560078
            </p>
          </div>
          <div className="flex flex-col lg:flex-row lg:gap-30 gap-10   ">
            <p>Follow Us:</p>
            <div className="flex flex-row md:gap-10 gap-4 ">
              <img src={facebook} alt="facebook" className="size-10"/>
              <img src={insta} alt="instagram" className="size-10"/>
              <img src={tedx} alt="twitter" className="size-10"/>
              <img src={linkdin} alt="linkdin" className="size-10"/>
            </div>
          </div>
        </div>
      </div>
      <div className="text-[#ffff] text-[20px] flex justify-center items-center mt-20 pb-10">
        <span>&copy;</span>
        <p>Copyright 2025, All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
