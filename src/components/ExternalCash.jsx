import React from 'react'
import Section from '../assets/images/section.png';


const ExternalCash = () => {
    return (
        <div className=' max-w-full'>
            <div className="px-4 md:px-6 mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 ">
                <div className="py-10 md:py-8 lg:py-6 pl-10 mt-0 md:mt-8 lg:mt-12">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                        External Checking Account
                    </h1>
                    <p className="text-base md:text-lg lg:text-xl pb-5 max-w-md">
                        Keep your current bank and have your Empower Cash Advance or Empower Thrive funds deposited to your primary bank account.
                    </p>
                    <p className="text-base md:text-lg lg:text-xl pb-5 max-w-md leading-8">
                        Keep your current bank and have your Empower Cash Advance or Empower Thrive funds deposited to your primary bank account.
                        Keep your current bank and have your Empower Cash Advance or Empower Thrive funds deposited to your primary bank account.
                    </p>


                    <button className="bg-black text-white button-shadow font-semibold py-2 px-4 rounded mt-4 hover:bg-orange-400">
                        Learn More
                    </button>

                </div>
                <div className="flex justify-center">
                    <img src={Section} alt="Section" className='w-full max-w-[546px] h-auto px-4 py-6 md:px-10 md:py-9' />
                </div>
            </div>

        </div>
    )
}

export default ExternalCash