import { RiFacebookBoxFill, RiInstagramFill } from '@remixicon/react';
const Footer = () => {
  return (
    <div className='container mx-auto px-4'>
      <div className='flex flex-col md:flex-row justify-between items-center mb-8'>
        <div className='mb-6 md:mb-0 text-center md:text-left'>
          <h2 className='text-2xl font-bold  text-white'>Jericho Steakhouse</h2>
          <p className='text-sm text-gray-400'>
            Where every meal is a masterpiece.
          </p>
        </div>

        <div className='flex gap-4'>
          <a href='#' className='text-gray-400 hover:text-white'>
            <RiFacebookBoxFill />
          </a>
          <a href='#' className='text-gray-400 hover:text-white'>
            <RiInstagramFill />
          </a>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div>
          <h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
          <ul className='space-y-2 text-gray-400'>
            <li>
              <a href='#' className='hover:text-white'>
                Home
              </a>
            </li>
            <li>
              <a href='#menu' className='hover:text-white'>
                Menu
              </a>
            </li>
            <li>
              <a href='#reservations' className='hover:text-white'>
                Reservations
              </a>
            </li>
            <li>
              <a href='#contact' className='hover:text-white'>
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className='text-lg font-semibold mb-4'>Contact Us</h3>
          <p className='text-gray-400'>
            <i className='fas fa-map-marker-alt mr-2'></i>
            123 Steakhouse Blvd, Foodie City, FC 12345
          </p>
          <p className='text-gray-400 mt-2'>
            <i className='fas fa-phone mr-2'></i>
            +1 (123) 456-7890
          </p>
          <p className='text-gray-400 mt-2'>
            <i className='fas fa-envelope mr-2'></i>
            info@jerichosteakhouse.com
          </p>
        </div>

        <div>
          <h3 className='text-lg font-semibold mb-4'>Operating Hours</h3>
          <ul className='space-y-2 text-gray-400'>
            <li>Mon - Thu: 12:00 PM - 10:00 PM</li>
            <li>Fri - Sat: 12:00 PM - 11:00 PM</li>
            <li>Sun: 12:00 PM - 9:00 PM</li>
          </ul>
        </div>
      </div>

      <div className='mt-8 border-t border-gray-700 pt-6 text-center text-sm text-gray-500'>
        <p>&copy; 2024 Jericho Steakhouse. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
