import { useState } from 'react';
import { RiMenu4Line } from '@remixicon/react';
import { RiCloseLine } from '@remixicon/react';

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='fixed w-full top-0 h-[90px] shadow-xl z-30 bg-white'>
      <div className='container mx-auto flex justify-between h-full items-center'>
        <a href='/' className='h3 font-bold hover:contain-none'>
          Jericho <span className='text-accent font-normal'>SteakHouse</span>
        </a>
        <nav>
          <div className='cursor-pointer lg:hidden' onClick={toggleMenu}>
            {isMenuOpen ? (
              <RiCloseLine className='text-4xl text-primary' />
            ) : (
              <RiMenu4Line className='text-4xl text-primary' />
            )}
          </div>
          <ul
            className={`fixed w-full ${
              isMenuOpen ? 'h-[250px] p-6' : 'h-0'
            } p-0 bg-white overflow-hidden border-t top-[90px] left-0 right-0 flex flex-col gap-4 lg:relative lg:flex-row lg:p-0 lg:top-0 lg:border-none lg:h-full transition-all duration-300`}
          >
            <li>
              <a
                className='hover:underline decoration-2 decoration-accent transition-all duration-300'
                href='#'
              >
                Home
              </a>
            </li>
            <li>
              <a
                className='hover:underline decoration-2 decoration-accent transition-all duration-300'
                href='#'
              >
                About Us
              </a>
            </li>
            <li>
              <a
                className='hover:underline decoration-2 decoration-accent transition-all duration-300'
                href='#'
              >
                Menu
              </a>
            </li>
            <li>
              <a
                className='hover:underline decoration-2 decoration-accent transition-all duration-300'
                href='#'
              >
                Reservations
              </a>
            </li>
            <li>
              <a
                className='hover:underline decoration-2 decoration-accent transition-all duration-300'
                href='#'
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                className='hover:underline decoration-2 decoration-accent transition-all duration-300'
                href='#'
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
