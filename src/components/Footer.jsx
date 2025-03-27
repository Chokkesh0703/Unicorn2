import React from "react";
import logo from "./../assets/logo/mlogo.png";

import facebook from "../assets/medialogo/facebook.svg";
import insta from "../assets/medialogo/insta.svg";
import linkdin from "../assets/medialogo/link.svg";
import tedx from "../assets/medialogo/tedx.svg";

const Footer = () => {
  return (
    <div id="Footer">
      <div className="flex   lg:flex-row flex-col  lg:gap-0 pt-5 w-full ">
        <div className="flex flex-col   gap-10  w-full p-20 pt-0 items-center lg:items-baseline ">
          <div className="flex flex-col w-[218px] h-[118px]  bg-contain bg-no-repeat  lg:m-0">
            <img src={logo} alt="logo" className="w-full h-full" />
          </div>
          <div className="lg:pr-20 ">
            <p className="text-[#FFFFFF] lg:text-[20px] font-Popins font-light   ">
              "Ready to bring your creative vision to life? Our team at The
              Unicorn Pictures is eager to hear from you. Whether you're seeking
              stunning photography, captivating animation, or have a unique
              project in mind, we're here to help.
            </p>
          </div>
        </div>
        <div className="flex flex-col text-[#FFFFFF] font-Rubik font-extralight text-[10px] md:text-[20px] lg:text-[20px] gap-20 overflow-hidden  w-full px-20 lg:px-0 lg:pr-20 " >
          <div className="flex flex-row md:gap-25   gap-15  ">
            <p>Ph no:</p>
            <p>+91 9620425828</p>
          </div>
          <div className="flex flex-row md:gap-35 lg:gap-20 gap-10 ">
            <p>Address:</p>
            <p className="">
              2nd floor, 71, 15th Cross Rd, Dollar Layout, 3rd Phase, J. P.
              Nagar, Bengaluru, Karnataka 560078
            </p>
          </div>
          <div className="flex flex-col lg:flex-row lg:gap-15 gap-10   ">
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
      <div className="text-[#ffff] text-[20px] flex justify-center items-center pt-10 lg:pt-0 pb-10">
        <span>&copy;</span>
        <p>Copyright 2025, All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
