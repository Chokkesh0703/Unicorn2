import React from "react";
import unicorn from "./../assets/sidepic/Group 30680.png";
import blank from "./../assets/unicorn/Group 29909.png";
import animal from "./../assets/unicorn/photo-animal-natural-habitat.png";
import photo from "./../assets/unicorn/photographer-with-camera-capturing-image-nature.png";

const About = () => {
  return (
    <div id="#About" className="" style={{ position: "relative" }}>
      <div id="About" className=" overflow-hidden h-[400px] md:h-[800px]  mt-50 mb-0 lg:mt-0">
        <div className="lg:ml-55 md:ml-40 ml-10 relative">
          <h1 className="text-[#BF9C32]  text-[25px] font-bold  md:text-[32px] font-Poppins  ">
            Our Story
          </h1>
          <p className="text-[#FFFFFFD8] text-[20px] md:text-[43px] font-Poppins">
            About The Unicorn Pictures
          </p>
        </div>
        <div
          className="p-1 relative "
          style={{
            backgroundImage: `url(${unicorn})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%",
            height: "50vh",
            color: "#ffff",
            opacity: "200%",
          }}
        >
          <div
            className=" ml-29 mt-3 pr-12 pt-10 pl-1 w-[6rem] h-[6rem] md:w-[18rem] md:h-[14rem] md:mt-10 md:mx-[280px] md:pt-22 md:pl-2 md:pr-40 lg:w-[20rem] lg:h-[20rem] lg:mt-20 lg:mx-[480px] lg:pt-30 rounded-full   "
            style={{
              backgroundImage: `url(${blank})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          >
            <p className="text-[4px] md:text-[10px] lg:text-[15px]">
              The Unicorn Pictures crafts magical visual experiences through
              innovative storytelling.
            </p>
          </div>
          <div
            className="absolute top-4 left-56  w-[6rem] h-[6rem] md:w-[14rem] md:h-[14rem] md:mt-8 md:left-137 lg:w-[20rem] lg:h-[20rem] lg:top-12 lg:left-220  rounded-full border-l-black border-l-12"
            style={{
              backgroundImage: `url(${photo})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div
            className="absolute top-4 left-40  w-[6rem] h-[6rem] md:w-[14rem] md:h-[14rem] md:top-12 md:left-100  lg:w-[20rem] lg:h-[20rem] lg:top-20 lg:left-165 rounded-full border-l-black border-l-10"
            style={{
              backgroundImage: `url(${animal})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute top-10 left-1 md:top-20 md:left-2 lg:top-26">
              <p className="font-Poppins  lg:text-[90px] md:text-[52px] text-[20px] text-[#ffff]">
                Unicorn
              </p>
            </div>
            <button className="w-[40px] h-[10px] top-[52%] absolute   left-[120%] md:w-[9vw] md:h-[20px] md:top-[115px] md:right-[100px] lg:top-[160px] lg:right-0  lg:w-30 lg:h-10 bg-[#ffff] text-[#0D1321] text-[7px] rounded-[170px] lg:text-[18px]">
              Learn More
            </button>
          </div>
        </div>
        <div className="py-10">
        <p className="text-[17px] font-Poppins text-[#ffff] absolute top-60 p-10 pb-0 pt-0 overflow-auto text-center h-[50px] md:top-150 md:w=20 no-scrollbar lg:top-150 cursor-pointer lg:px-50">
      The Unicorn Pictures Private Limited, incorporated in the year 2017
      as a Private Limited Company registered with Registrar of Companies.
      The registered office of the Company is situated in No. 96, 2nd
      Floor, R.J. Garden, Marathahalli, Chinnapanahalli, Bangalore 560
      037. The Company is working towards excellence in the Creative and
      Animation Space. We believe in pursuing business through innovation
      and technology. Our goal is to be an industry leader by providing
      enhanced products, services, relationship and profitability. Vision:
      To provide quality products and services that exceeds the
      expectations of our valued customers. Mission: To build long term
      relationships with our customers. In the future, we look forward to
      developing a strong base of key customers and increasing the assets
      and investments of our Company. Our team comprises of a group of
      highly motivated industry experts and specialists with several years
      of experience. At The Unicorn Pictures Private Limited, our
      customers always come first and we greatly appreciate the trust that
      they place in us. From initial enquiry to final copy, the The
      Unicorn Pictures Private Limited team will help you achieve your
      goals on time.
    </p>
      </div>
      </div>
    </div>
  );
};

export default About;
