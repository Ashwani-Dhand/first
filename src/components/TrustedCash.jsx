import React from 'react';
import image from '../assets/images/image-5.png';
import Ranveer from '../assets/images/image-6.png';
import Vineet from '../assets/images/image-7.png';


const TrustedCash = () => {
  return (
    <div className="bg-black   w-full min-h-screen flex items-center justify-center py-10" id='About'>
      <div className="px-4 md:px-6 mx-auto  max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
        
        {/* Header Section */}
        <div className="text-center flex flex-col items-center justify-center py-7 md:py-3 lg:py-1 text-white col-span-1 md:col-span-2 lg:col-span-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
          Trusted by 
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
          millions of customers.
          </h2>
        </div>

        {/* Card 1 */}
        <div className="bg-white max-w-xs md:max-w-sm w-full h-auto p-4 md:p-6 slide text-black rounded-lg flex flex-col items-center mx-auto "data-aos="fade-down-right" >
          <p className="text-sm md:text-base leading-relaxed text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel
          </p>
          <div className="flex items-center mt-4">
            <img src={image} alt="Mukesh's profile" className="w-12 h-12 rounded-full object-cover" />
            <div className="pl-3 text-left">
              <h5 className="text-base md:text-lg font-semibold">Mukesh</h5>
              <p className="text-sm md:text-base text-gray-700">Web Designer</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white max-w-xs md:max-w-sm w-full h-auto p-4  md:p-6 text-black slide rounded-lg flex flex-col items-center mx-auto" data-aos="fade-up-right">
          <p className="text-sm md:text-base leading-relaxed text-center" > 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel
          </p>
          <div className="flex items-center mt-4">
            <img src={Ranveer} alt="Ranveer's profile" className="w-12 h-12 rounded-full object-cover" />
            <div className="pl-3 text-left">
              <h5 className="text-base md:text-lg font-semibold">Ranveer</h5>
              <p className="text-sm md:text-base text-gray-700">Web Designer</p>
            </div>
          </div>
        </div>


        <div className="bg-white max-w-xs md:max-w-sm w-full h-auto p-4 md:p-6 text-black slide rounded-lg flex flex-col items-center mx-auto" data-aos="fade-up-right">
          <p className="text-sm md:text-base leading-relaxed text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel
          </p>
          <div className="flex items-center mt-4">
            <img src={Ranveer} alt="Ranveer's profile" className="w-12 h-12 rounded-full object-cover" />
            <div className="pl-3 text-left">
              <h5 className="text-base md:text-lg font-semibold">Ranveer</h5>
              <p className="text-sm md:text-base text-gray-700">Web Designer</p>
            </div>
          </div>
        </div>



        {/* Card 3 */}
        <div className="bg-white max-w-xs md:max-w-sm w-full h-auto p-4 md:p-6 text-black slide rounded-lg flex flex-col items-center mx-auto" data-aos="fade-down-right">
          <p className="text-sm md:text-base leading-relaxed text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel
          </p>
          <div className="flex items-center mt-4" data-aos="fade-up-right">
            <img src={Vineet} alt="Vineet's profile" className="w-12 h-12 rounded-full object-cover" />
            <div className="pl-3 text-left">
              <h5 className="text-base md:text-lg font-semibold">Vineet</h5>
              <p className="text-sm md:text-base text-gray-700">Web Designer</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    
  );
};

export default TrustedCash;
