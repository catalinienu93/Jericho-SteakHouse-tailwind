const About = () => {
  return (
    <div className='container mx-auto px-4 flex flex-col lg:flex-row items-center'>
      <div className='lg:w-1/2 lg:pr-8'>
        <h2 className='text-4xl font-bold text-gray-800 mb-6 '>
          Welcome to Jericho Steakhouse
        </h2>
        <p className='text-lg text-gray-600 mb-4'>
          At Jericho Steakhouse, we bring together the finest cuts of meat,
          seasoned to perfection, and grill them with care to create a dining
          experience you won’t forget. From sizzling steaks to handcrafted
          cocktails, every detail is designed to delight your senses.
        </p>
        <p className='text-lg text-gray-600 mb-6'>
          Whether you are here to celebrate a special occasion or simply to
          indulge in exceptional flavors, our team is dedicated to making your
          visit unforgettable.
        </p>
        <a
          href='#menu'
          className='inline-block px-6 py-3 text-white bg-primary hover:bg-primary-dark rounded-md text-lg'
        >
          Explore Our Menu
        </a>
      </div>

      <div className='lg:w-1/2 mt-8 lg:mt-0'>
        <img
          src='https://images.unsplash.com/photo-1629749380581-38998649af6a?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='Steakhouse interior'
          className='shadow-lg xl:rounded-tr-[290px] xl:rounded-bl-[200px]'
        />
      </div>
    </div>
  );
};

export default About;
