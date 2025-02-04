/* This example requires Tailwind CSS v2.0+ */
import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

// <header className="bg-indigo-600">
export default function Example() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    return setIsOpen(!isOpen);
  }

  return (
    <>
      <header className='bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 sticky top-0 z-50'>
        <div className='relative flex justify-between h-16'>
          <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
            {/* Mobile menu button */}
            <div className='inline-flex items-center justify-center p-2 rounded-md bg-indigo-50 border-indigo-50 text-gray-700'>
              <span className='sr-only'>Open main menu</span>
              {isOpen ? (
                <XMarkIcon
                  className='block h-6 w-6'
                  aria-hidden='true'
                  onClick={() => handleClick()}
                />
              ) : (
                <Bars3Icon
                  className='block h-6 w-6'
                  aria-hidden='true'
                  onClick={() => handleClick()}
                />
              )}
            </div>
          </div>
          <div className='flex-1 flex flex-row items-center justify-center sm:items-stretch sm:justify-start'>
            <div className='flex-shrink-0 flex items-center text-white hover:text-indigo-50'>
              <h3>
                <Link href='/'>mosesin.tech</Link>
              </h3>
            </div>
            <div className='hidden sm:ml-6 sm:flex sm:space-x-8'>
              <Link
                href='/about'
                className='border-gray-300 text-white hover:text-indigo-50 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
              >
                About
              </Link>
              <Link
                href='/posts'
                className='border-transparent hover:border-gray-300 text-white hover:text-indigo-50 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
              >
                Articles
              </Link>
              <Link
                href='/portfolio'
                className='border-transparent hover:border-gray-300 text-white hover:text-indigo-50 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
              >
                Portfolio
              </Link>
              <Link
                href='/search'
                className='border-transparent hover:border-gray-300 text-white hover:text-indigo-50 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
              >
                Search
              </Link>
              <Link
                href='/categories'
                className='border-transparent hover:border-gray-300 text-white hover:text-indigo-50 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
              >
                Categories
              </Link>
              <Link
                href='/posts/single'
                className='border-transparent hover:border-gray-300 text-white hover:text-indigo-50 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
              >
                Post
              </Link>
              <Link
                href='/categories/single'
                className='border-transparent hover:border-gray-300 text-white hover:text-indigo-50 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
              >
                Category
              </Link>
              <Link
                href='/authors/single'
                className='border-transparent hover:border-gray-300 text-white hover:text-indigo-50 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
              >
                Author
              </Link>
              <Link
                href='/404'
                className='border-transparent hover:border-gray-300 text-white hover:text-indigo-50 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
              >
                404
              </Link>
              <Link
                href='/500'
                className='border-transparent hover:border-gray-300 text-white hover:text-indigo-50 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
              >
                500
              </Link>
            </div>
          </div>
        </div>
        <div className={`${isOpen ? '' : 'hidden'}`}>
          <div className='bg-indigo-50'>
            <Link
              href='/about'
              className='bg-indigo-50 border-purple-600 text-purple-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
              onClick={() => handleClick()}
            >
              About
            </Link>
            <Link
              href='/posts'
              className='border-transparent text-purple-700 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
              onClick={() => handleClick()}
            >
              Articles
            </Link>
            <Link
              href='/portfolio'
              className='border-transparent text-purple-700 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
              onClick={() => handleClick()}
            >
              Portfolio
            </Link>
            <Link
              href='/search'
              className='border-transparent text-purple-700 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
              onClick={() => handleClick()}
            >
              Search
            </Link>
            <Link
              href='/categories'
              className='border-transparent text-purple-700 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
              onClick={() => handleClick()}
            >
              Categories
            </Link>
            <Link
              href='/posts/single'
              className='border-transparent text-purple-700 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
              onClick={() => handleClick()}
            >
              Post
            </Link>
            <Link
              href='/categories/single'
              className='border-transparent text-purple-700 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
              onClick={() => handleClick()}
            >
              Category
            </Link>
            <Link
              href='/authors/single'
              className='border-transparent text-purple-700 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
              onClick={() => handleClick()}
            >
              Author
            </Link>
            <Link
              href='/404'
              className='border-transparent text-purple-700 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
              onClick={() => handleClick()}
            >
              404
            </Link>
            <Link
              href='/500'
              className='border-transparent text-purple-700 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
              onClick={() => handleClick()}
            >
              500
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
