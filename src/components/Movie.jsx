import React from 'react';
import clipboard from './../assets/sidepic/clipboard.png'

// Import images
import image1 from './../assets/movies/97823fec3aad7753f2707638669bdaaa.png';
import image2 from './../assets/movies/aa4a88111384767.6000a26aa0e9a.png';
import image3 from './../assets/movies/95669260262159.5a44835b6786c.png';
import image4 from './../assets/movies/273e787ba809e725948334340c658e68_original.png';
import image5 from './../assets/movies/0f03e6733b0cf567cc92e8e20290462f.png';
import image6 from './../assets/movies/Befikrre.png';
import image7 from './../assets/movies/d9619840402943.577deee83b4c1.png';
import image8 from './../assets/movies/Dhangal.png';
import image9 from './../assets/movies/MV5BNTQ2ODRhNzUtMDY5ZS00NDdjLWExY2ItNDVkNGRlNTYyNDc0XkEyXkFqcGc@._V1_.png';
import image10 from './../assets/movies/plane.png';
import image11 from './../assets/movies/salar.png';
import image12 from './../assets/movies/Thor.png';
import image13 from './../assets/movies/UI.png';
import image14 from './../assets/movies/unnamed.png';

function Movie() {
  const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14];

  return (
    <>
    <div id='Movies' className="relative gap-20 flex flex-col ">
    <div className="flex flex-col justify-center items-center gap-5 relative ] ">
        <h1 className='text-[43px] text-[#BF9C32] font-Poppins font-bold'>Movie Pictures</h1>
        <p className=' md:text-[28px] text-[#FFFFFFD8] font-Poppins '>Our Curated Collection of Magical Movies</p>
    </div>
    <div className=" ">
        
    <div className="flex gap-3 overflow-x-scroll  no-scrollbar">
      {images.map((image, index) => (
          <div key={index} className="flex-none w-[300px] h-[700px] group hover:w-[500px] ">
          <img
            src={image}
            alt={`Movie ${index + 1}`}
            className="w-full h-full   group-hover:transition-normal "
            />
        </div>
      ))}
    </div>
    </div>
    <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 justify-center items-center  font-[Poppins] " >
        <div className="w-[100px] h-[80px] md:w-50 md:h-40 lg:w-[400px] lg:h-[300px]  lg:m-[40px] ml-0 md:p-10 md:px-2 "
        style={{
          backgroundImage:`url(${clipboard})`,
          backgroundRepeat:'no-repeat',
          backgroundSize:'100%',
          opacity:'100%',
        }}></div>
        <p className='text-[#FFFFFF] md:text-[18px] text-[10px] w-[80%] text-center'>"We're driving creative excellence in animation and photography, leading with innovation and technology."</p>
    </div>
    </div>
    </>
  );
}

export default Movie;
