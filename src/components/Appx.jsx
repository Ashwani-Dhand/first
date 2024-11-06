import React from 'react';
import { AppStore, PlayStore } from './Icons';

const Appx = () => {
    return (
        <div className="max-w-full h-[489px] bg-orange-500 flex flex-col items-center justify-center px-4">
            <div className="text-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
                    Download AppX
                </h1>
                <h2 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold'>to get started</h2>
            </div>
            <div className="flex flex-col md:flex-row gap-4 py-5">
                <button className="w-full h-16 md:w-[184px] md:h-[67px] text-white bg-black py-3 px-4 flex items-center justify-center md:justify-start gap-2 hover:bg-orange-400">
                    <AppStore />
                    <span>Available now on App Store</span>
                </button>
                <button className="w-full h-16 md:w-[184px] md:h-[67px] text-white bg-black py-3 px-4 flex items-center justify-center md:justify-start gap-2 hover:bg-orange-400">
                    <PlayStore />
                    <span>Available now on Play Store</span>
                </button>
            </div>

        </div>
    );
};

export default Appx;
