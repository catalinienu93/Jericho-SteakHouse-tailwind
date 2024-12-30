import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Experience = () => {
  return (
    <section className='experience-section bg-gray-50 py-16'>
      <div className='container mx-auto px-4'>
        <h2 className='text-4xl font-bold text-gray-800 text-center mb-8'>
          More Than a Meal—An Experience
        </h2>

        <div className='flex flex-col lg:flex-row items-center gap-8'>
          <div className='lg:w-1/2'>
            <p className='text-lg text-gray-600 mb-6'>
              At Jericho Steakhouse, dining is more than just enjoying
              exceptional food it`s an experience. Our cozy and elegant ambiance
              is designed to make every meal feel special. Whether you`re
              celebrating a milestone or simply enjoying a night out, we create
              a space for memories.
            </p>
            <p className='text-lg text-gray-600 mb-6'>
              Enjoy live music on select evenings, paired with handcrafted
              cocktails and our warm, attentive service. From the moment you
              step through our doors, you`ll feel the Jericho difference.
            </p>
            <div className='flex justify-center'>
              <button className='btn btn-primary mx-auto xl:mx-0'>
                Book Your Table
              </button>
            </div>
          </div>

          <div className='lg:w-1/2'>
            <Swiper
              spaceBetween={50}
              slidesPerView={3}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                {' '}
                <img
                  src='https://via.placeholder.com/600x400'
                  alt='Cozy ambiance'
                  className='rounded-lg shadow-lg'
                />
              </SwiperSlide>
              <SwiperSlide>
                {' '}
                <img
                  src='https://via.placeholder.com/600x400'
                  alt='Elegant interior'
                  className='rounded-lg shadow-lg'
                />
              </SwiperSlide>
              <SwiperSlide>
                {' '}
                <img
                  src='https://via.placeholder.com/600x400'
                  alt='Live music event'
                  className='rounded-lg shadow-lg'
                />
              </SwiperSlide>
              <SwiperSlide>
                {' '}
                <img
                  src='https://via.placeholder.com/600x400'
                  alt='Live music event'
                  className='rounded-lg shadow-lg'
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
