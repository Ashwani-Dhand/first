import React from 'react'
import Sections from '../assets/images/Sections.png';
const UsedCard = () => {
    return (
        <div className="max-w-full px-4 md:px-6 mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex justify-center md:justify-start pt-10 md:pt-24 lg:pt-10 pb-10 md:pb-24 lg:pb-10">
                    <img
                        src={Sections}
                        alt="sections"
                        className="w-full max-w-[546px] h-auto px-4 py-6 md:px-10 md:py-9"
                    />
                </div>
                <div className="py-10 md:py-16 lg:py-24">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                        Used and trusted by a community of millions
                    </h1>
                    <p className="mt-4 text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit in consequat sollicitudin adipiscing facilisi sit et hendrerit diam.
                    </p>


                    <div className="flex flex-col md:flex-row gap-4 py-5">
                        <div className="w-full md:w-[200px] h-[150px] shadow-lg bg-white flex flex-col justify-center items-center">
                            <h1 className="font-bold text-4xl p-2">12+</h1>
                            <p className="font-bold text-center">Years Experience</p>
                        </div>
                        <div className="w-full md:w-[200px] h-[150px] shadow-lg bg-white flex flex-col justify-center items-center">
                            <h1 className="font-bold text-4xl p-2">90%</h1>
                            <p className="font-bold text-center">Committed Users</p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="w-full md:w-[200px] h-[150px] shadow-lg bg-white flex flex-col justify-center items-center">
                            <h1 className="font-bold text-4xl p-2">10M</h1>
                            <p className="font-bold text-center">Active Users</p>
                        </div>
                        <div className="w-full md:w-[200px] h-[150px] shadow-lg bg-white flex flex-col justify-center items-center">
                            <h1 className="font-bold text-4xl p-2">250M</h1>
                            <p className="font-bold text-center">Total Transactions</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UsedCard