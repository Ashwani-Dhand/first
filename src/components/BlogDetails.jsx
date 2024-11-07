import React from 'react'
import { BLOG_CARD_DATA_LIST } from './common/Helper'

const BlogDetails = () => {
    return (
        <div className='max-w-[1200px] px-4 mx-auto py-20'>
            <h2 className='text-2xl md:text-3xl lg:text-4xl text-black leading-[110%]'>Our Blog</h2>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-6'>
                {BLOG_CARD_DATA_LIST.map((obj, i) => {
                    return (
                        <div key={i}>
                            <img src={obj.image} alt="" className='w-full ' />
                            <p className='pt-3'>My birthday date is : {obj.date}</p>
                            <span className='w-[160px] h-[1px] bg-black block my-5'></span>
                            <h3 className='text-3xl pb-5'>{obj.title}</h3>
                            <button className={`bg-red-600 py-2.5 px-5 text-white ${obj.btnStyle}`}>Read More</button>
                            {obj.icon}
                           
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default BlogDetails