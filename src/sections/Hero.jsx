import { RiArrowRightLine } from '@remixicon/react';

const Hero = () => {
  return (
    <div className='container mx-auto h-full flex items-center justify-center xl:justify-start'>
      <div className='absolute inset-0 bg-gray-200 bg-opacity-25 z-10 xl:rounded-bl-[290px]'></div>
      <div className='hero-text w-[567px] flex flex-col items-center text-center xl:text-left lg:items-center z-20'>
        <h1 className='h1 mb-8'>Where Flavor Meets Tradition</h1>
        <p className='mb-8 text-primary'>
          Welcome to Jericho Steakhouse, your ultimate destination for
          mouthwatering steaks, hearty sides, and unforgettable dining
          experiences.
        </p>
        <button className='btn btn-primary mx-auto xl:mx-0'>
          Book a Table
          <RiArrowRightLine className='text-accent' />
        </button>
      </div>
    </div>
  );
};

export default Hero;
