import React from 'react';
import phone from '../assets/images/Body.png';
import { AppStore, PlayStore } from './Icons';

const Hero = () => {
  return (
    <div className=" bg-color1" id='Home'>
      <div className="px-4 md:px-6 mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2">
        <div className=" md:py-32 px-4">
          <h1 className="text-4xl  md:text-6xl lg:text-7xl leading-tight md:leading-[72px] font-bold">
            Your journey to better credit
          </h1>
          <h2 className="text-4xl md:text-6xl lg:text-7xl leading-tight md:leading-[72px] font-bold bg-orange-300 inline-block pb-2 md:pb-4 mt-4 md:mt-6">
            Starts here
          </h2>
          <p className="text-md md:text-lg font-medium py-4">
            Think the credit system is stacked against you? So do we. We'll help you get the credit you deserve.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <a href="https://www.apple.com/app-store/" className="w-full h-16 md:w-[184px] md:h-[67px] text-white bg-black py-3 px-4 flex items-center justify-center md:justify-start gap-2 hover:bg-orange-400">
              <AppStore />
              <span>Available now on App Store</span></a>
            <a href=" https://play.google.com/store/apps/details?id=com.instagram.android&hl=en_IN" className="w-full h-16 md:w-[184px] md:h-[67px] text-white bg-black py-3 px-4 flex items-center justify-center md:justify-start gap-2 hover:bg-orange-400">
              <PlayStore />
              <span>Available now on Play Store</span></a>
          </div>

        </div>
        <div className=" bg-color flex justify-center md:justify-end px-8 md:px-12 py-20">
          <img src={phone} alt="phone" className="w-[300px] md:w-[312px] pl-3 h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
