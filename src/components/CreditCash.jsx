import React from 'react'
import Section from '../assets/images/section.png';
import { Corects } from './Icons';
const CreditCash = () => {
  return (
    <div className='max-w-full'>
    <div className="px-4 md:px-6 mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 items-center gap-6">
        <div className="flex flex-col justify-center items-start p-6 md:p-10 space-y-4 gap-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">We believe credit should be more accessible</h1>

            <div className="flex items-center text-base md:text-lg lg:text-xl">
                <Corects />
                <p className='pl-5'>Cash whenever you need it</p>
            </div>

            <div className="flex items-center text-sm md:text-base lg:text-lg">
                <Corects />
                <p className='pl-5'>Opportunity to improve your credit</p>
            </div>

            <div className="flex items-center text-sm md:text-base lg:text-lg">
                <Corects />
                <p className='pl-5'>No credit score or security deposit to qualify</p>
            </div>




            <button className="bg-black text-white button-shadow font-semibold py-2 px-4 rounded mt-4 hover:bg-orange-400">
                Learn More
            </button>
        </div>
        <div className="flex justify-center">
            <img src={Section} alt="Section" className='w-full max-w-[546px] h-auto px-4 py-6 md:px-10 md:py-9' />
        </div>
      

    </div >
</div >

  )
}

export default CreditCash