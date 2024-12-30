const SignatureDishes = () => {
  return (
    <div className='container mx-auto px-4'>
      <h2 className='text-4xl font-bold text-gray-800 text-center mb-12'>
        Our Signature Creations
      </h2>
      <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
        <div className='dish-card p-6 text-center'>
          <img
            src='https://images.unsplash.com/photo-1625937329935-287441889bce?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='Tomahawk Ribeye'
            className='rounded-lg mb-4'
          />
          <h3 className='text-2xl font-bold text-gray-800'>Tomahawk Ribeye</h3>
          <p className='text-gray-600 mb-4'>
            Juicy, perfectly marbled ribeye cooked to perfection.
          </p>
        </div>

        <div className='dish-card p-6 text-center'>
          <img
            src='https://images.unsplash.com/photo-1606419420761-4f2aa891ed19?q=80&w=1998&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='Filet Mignon'
            className='rounded-lg mb-4'
          />
          <h3 className='text-2xl font-bold text-gray-800'>Filet Mignon</h3>
          <p className='text-gray-600 mb-4'>
            Tender, buttery filet grilled to absolute perfection.
          </p>
        </div>

        <div className='dish-card p-6 text-center'>
          <img
            src='https://images.unsplash.com/photo-1432139509613-5c4255815697?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='Porterhouse Steak'
            className='rounded-lg mb-4'
          />
          <h3 className='text-2xl font-bold text-gray-800'>
            Porterhouse Steak
          </h3>
          <p className='text-gray-600 mb-4'>
            A classNameic steakhouse cut for hearty appetites.
          </p>
        </div>

        <div className='dish-card p-6 text-center'>
          <img
            src='https://images.unsplash.com/photo-1516685125522-3c528b8046ee?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='Grilled Lamb Chops'
            className='rounded-lg mb-4'
          />
          <h3 className='text-2xl font-bold text-gray-800'>
            Grilled Lamb Chops
          </h3>
          <p className='text-gray-600 mb-4'>
            Succulent lamb chops, seasoned with fresh herbs.
          </p>
        </div>

        <div className='dish-card p-6 text-center'>
          <img
            src='https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fFN1cmYlMjAlMjYlMjBUdXJmJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D'
            alt='Surf & Turf'
            className='rounded-lg mb-4'
          />
          <h3 className='text-2xl font-bold text-gray-800'>Surf & Turf</h3>
          <p className='text-gray-600 mb-4'>
            A decadent pairing of filet mignon and lobster tail.
          </p>
        </div>

        <div className='dish-card p-6 text-center'>
          <img
            src='https://images.unsplash.com/photo-1614398750956-402891a7dce1?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='Smoked Brisket'
            className='rounded-lg mb-4'
          />
          <h3 className='text-2xl font-bold text-gray-800'>Smoked Brisket</h3>
          <p className='text-gray-600 mb-4'>
            Slow-smoked brisket, tender and full of flavor.
          </p>
        </div>
      </div>

      <div className='flex justify-center mt-12'>
        <button className='btn btn-primary mx-auto xl:mx-0'>
          See Full Menu
        </button>
      </div>
    </div>
  );
};

export default SignatureDishes;
