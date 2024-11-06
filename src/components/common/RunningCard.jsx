import React from 'react';
import image from '../../assets/images/image-1.png';
import img from '../../assets/images/image-2.png';
import images from '../../assets/images/image-3.png';
import imags from '../../assets/images/image-4.png';

const RunningCard = () => {
  return (
    <div className='bg-black w-full min-h-40 overflow-hidden '>
      <div className="flex  justify-around gap-40 py-20 items-center slide-in">
        <img src={image} alt="image" className='w-[168px] h-[42px] md:w-[200px] md:h-[50px] lg:w-[250px] lg:h-[60px]
      ' />
        <img src={img} alt="image" className='w-[288px] h-[42px] md:w-[200px] md:h-[50px] lg:w-[250px] lg:h-[60px]' />
        <img src={images} alt="image" className='w-[288px] h-[42px] md:w-[200px] md:h-[50px] lg:w-[250px] lg:h-[60px]' />
        <img src={imags} alt="image" className='w-[288px] h-[42px] md:w-[200px] md:h-[50px] lg:w-[250px] lg:h-[60px]' />
        <img src={image} alt="image" className='w-[288px] h-[42px] md:w-[200px] md:h-[50px] lg:w-[250px] lg:h-[60px]' />
        <img src={img} alt="image" className='w-[288px] h-[42px] md:w-[200px] md:h-[50px] lg:w-[250px] lg:h-[60px]' />
        <img src={images} alt="image" className='w-[288px] h-[42px] md:w-[200px] md:h-[50px] lg:w-[250px] lg:h-[60px]' />
        <img src={imags} alt="image" className='w-[288px] h-[42px] md:w-[200px] md:h-[50px] lg:w-[250px] lg:h-[60px]' />
        <img src={img} alt="image" className='w-[288px] h-[42px] md:w-[200px] md:h-[50px] lg:w-[250px] lg:h-[60px]' />
        <img src={images} alt="image" className='w-[288px] h-[42px] md:w-[200px] md:h-[50px] lg:w-[250px] lg:h-[60px]' />
        <img src={imags} alt="image" className='w-[288px] h-[42px] md:w-[200px] md:h-[50px] lg:w-[250px] lg:h-[60px]' />
        <img src={image} alt="image" className='w-[288px] h-[42px] md:w-[200px] md:h-[50px] lg:w-[250px] lg:h-[60px]' />
        <img src={img} alt="image" className='w-[288px] h-[42px] md:w-[200px] md:h-[50px] lg:w-[250px] lg:h-[60px]' />
        <img src={images} alt="image" className='w-[288px] h-[42px] md:w-[200px] md:h-[50px] lg:w-[250px] lg:h-[60px]' />
        <img src={image} alt="image" className='w-[288px] h-[42px] md:w-[200px] md:h-[50px] lg:w-[250px] lg:h-[60px]' />
      </div>
    </div>


  );
}

export default RunningCard;
