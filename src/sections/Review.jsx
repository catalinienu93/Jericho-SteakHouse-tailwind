function Review() {
  return (
    <section className='reviews-section bg-gray-100 py-16'>
      <div className='container mx-auto px-4'>
        <h2 className='text-4xl font-bold text-gray-800 text-center mb-12'>
          What Our Guests Are Saying
        </h2>
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          <div className='review-card bg-white p-6 rounded-[30px] shadow-md'>
            <div className='mb-4'>
              <img
                src='https://via.placeholder.com/60'
                alt='Customer 1'
                className='w-16 h-16 rounded-full mx-auto'
              />
            </div>
            <h3 className='text-xl font-semibold text-gray-800 text-center mb-2'>
              Emily R.
            </h3>
            <p className='text-sm text-gray-600 italic text-center'>
              The Tomahawk Ribeye was the best steak I’ve ever had! The ambiance
              made our anniversary unforgettable. Can’t wait to come back.
            </p>
          </div>

          <div className='review-card bg-white p-6 rounded-[30px] shadow-md'>
            <div className='mb-4'>
              <img
                src='https://via.placeholder.com/60'
                alt='Customer 2'
                className='w-16 h-16 rounded-full mx-auto'
              />
            </div>
            <h3 className='text-xl font-semibold text-gray-800 text-center mb-2'>
              James K.
            </h3>
            <p className='text-sm text-gray-600 italic text-center'>
              Fantastic service and incredible food! The filet mignon was cooked
              to perfection, and the live music added such a nice touch.
            </p>
          </div>

          <div className='review-card bg-white p-6 rounded-[30px] shadow-md'>
            <div className='mb-4'>
              <img
                src='https://via.placeholder.com/60'
                alt='Customer 3'
                className='w-16 h-16 rounded-full mx-auto'
              />
            </div>
            <h3 className='text-xl font-semibold text-gray-800 text-center mb-2'>
              Sophia L.
            </h3>
            <p className='text-sm text-gray-600 italic text-center'>
              Jericho Steakhouse is my go-to spot for any celebration. Amazing
              food, friendly staff, and an inviting atmosphere!
            </p>
          </div>
        </div>

        <div className='text-center mt-12'>
          <a
            href='#reservations'
            className='px-6 py-3 bg-primary text-white rounded-md text-lg hover:bg-primary-dark'
          >
            Make a Reservation
          </a>
        </div>
      </div>
    </section>
  );
}

export default Review;
