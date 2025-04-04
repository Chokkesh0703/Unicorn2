import React from "react";
import contpic from "./../assets/contact/beautiful-businesswoman-using-smartphone-device-hands.png";
import logo from "./../assets/medialogo/Group 30678.svg";

const Contact = () => {
  return (
    <div id="Contact" className="mt-10 lg:mt-5 w-full ">
      {/* Contact Section */}
      <div className="flex flex-col lg:flex-row w-full text-center   md:gap-0">
        {/* Left Image */}
        <div
          className="w-full h-screen md:h-[900px] bg-cover bg-center"
          style={{ backgroundImage: `URL(${contpic})` }}
        ></div>

        {/* Right Contact Form */}
        <div className="flex flex-col gap-6  bg-black items-center justify-center w-full ">
          <div className="">

          <h1 className="text-[20px] md:text-[50px] lg:text-[80px] text-white font-bold text-left">
            Contact Us
          </h1>
          <p className="text-[#D6B962] text-[17px] md:text-[18px] lg:text-[23px] text-left ">
            Reach out and let’s start a conversation
          </p>

          <div className="w-[300px] md:w-[600px] lg:w-[680px]">
            <div className="flex flex-col text-start gap-4">
              {/* Input Fields */}
              {["Name", "Phone Number", "Email Address"].map((label, index) => (
                <div key={index}>
                  <label className="text-[#D6B962] text-[17px] md:text-[18px] lg:text-[30px]">
                    {label}
                  </label>
                  <input
                    type="text"
                    className="bg-white w-full h-12 rounded-md px-3 focus:outline-none focus:ring-2 focus:ring-[#D6B962]"
                  />
                </div>
              ))}

              {/* Message Field (TextArea) */}
              <div>
                <label className="text-[#D6B962] text-[17px] md:text-[18px] lg:text-[30px]">
                  Message
                </label>
                <textarea
                  className="bg-white w-full h-32 md:h-40 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#D6B962] resize-none"
                  placeholder="Type your message here..."
                  ></textarea>
              </div>

              <button className="bg-[#D6B962] h-12 mt-4  rounded-xl text-black font-semibold hover:bg-yellow-500 transition">
                Submit
              </button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
