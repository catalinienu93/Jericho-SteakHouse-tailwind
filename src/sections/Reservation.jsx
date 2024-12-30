const Reservation = () => {
  return (
    <section className='reservations-section bg-primary py-16 text-white'>
      <div className='container mx-auto px-4 text-center'>
        <h2 className='text-4xl font-bold mb-6'>Reserve Your Table Today</h2>
        <p className='text-lg mb-8'>
          Experience the best steaks in town. Book your table now and let us
          take care of the rest. Whether it`s a romantic dinner or a
          celebration, Jericho Steakhouse is ready to serve you.
        </p>

        <div className='flex justify-center gap-4'>
          <a
            href='#reservations'
            className='px-8 py-4 bg-white text-primary rounded-lg text-lg font-semibold shadow-md hover:bg-gray-100'
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
