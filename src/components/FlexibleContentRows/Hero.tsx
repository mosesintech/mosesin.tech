import { StarIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <>
      <div className='bg-gray-50 pb-8 sm:pb-12 lg:pb-12'>
        <div className='pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48'>
          <div className='mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24'>
            <div>
              <div className='mb-20'>
                <div className='sm:max-w-xl'>
                  <h1 className='text-4xl mb-2 font-extrabold text-gray-900 tracking-tight sm:text-5xl'>
                    Websites & Apps for Small Businesses
                  </h1>
                  <div className='inline-flex items-center divide-x divide-gray-300'>
                    <div className='flex-shrink-0 flex pr-5'>
                      <StarIcon
                        className='h-5 w-5 text-yellow-400'
                        aria-hidden='true'
                      />
                      <StarIcon
                        className='h-5 w-5 text-yellow-400'
                        aria-hidden='true'
                      />
                      <StarIcon
                        className='h-5 w-5 text-yellow-400'
                        aria-hidden='true'
                      />
                      <StarIcon
                        className='h-5 w-5 text-yellow-400'
                        aria-hidden='true'
                      />
                      <StarIcon
                        className='h-5 w-5 text-yellow-400'
                        aria-hidden='true'
                      />
                    </div>
                    <div className='min-w-0 flex-1 pl-5 py-1 text-sm text-gray-500 sm:py-3'>
                      <span className='font-medium text-gray-900'>
                        Custom Web & App Development
                      </span>
                    </div>
                  </div>
                  <p className='mt-6 text-xl text-gray-500'>
                    Whether you need a highly complicated custom form for your
                    marketing website, are looking to build some software to
                    increase revenue and make your life easier, or want a simple
                    website made by an industry professional, you&lsquo;ve come
                    to the right place.
                  </p>
                </div>
                <div className='mt-6 flex'>
                  <Link
                    href='/about'
                    className='w-1/2 flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700'
                  >
                    Hire Moses
                  </Link>
                  <Link
                    href='/about'
                    className='w-1/2 flex items-center justify-center px-4 py-3 text-base font-medium text-purple-700 hover:underline underline-offset-8'
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className='sm:mx-auto sm:max-w-3xl sm:px-6'>
            <div className='py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
              <div className='hidden sm:block'>
                <div className='absolute inset-y-0 left-1/2 w-screen bg-purple-50 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full' />
                <svg
                  className='absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0'
                  width={404}
                  height={392}
                  fill='none'
                  viewBox='0 0 404 392'
                >
                  <defs>
                    <pattern
                      id='837c3e70-6c3a-44e6-8854-cc48c737b659'
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits='userSpaceOnUse'
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className='text-purple-600'
                        fill='currentColor'
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={392}
                    fill='url(#837c3e70-6c3a-44e6-8854-cc48c737b659)'
                  />
                </svg>
              </div>
              {/* hidden sm:block hides this div so image isn't duplicated on smallest screens. */}
              <div className='hidden sm:block relative pl-4 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12 mr-[-10rem]'>
                <Image
                  className='w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 border-purple-700 border-2'
                  src='/images/Moses_Cosme.jpeg'
                  alt='mosesin.tech'
                  width={`200`}
                  height={`250`}
                  quality={100}
                  priority={true}
                />
              </div>
              {/* Because negative margins are broken in responsive tailwind the following component
                  is necessary for the smallest screen size. */}
              <div className='sm:hidden relative pl-4 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12 mr-4'>
                <Image
                  className='w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 border-purple-700 border-2'
                  src='/images/Moses_Cosme.jpeg'
                  alt='mosesin.tech'
                  width={`200`}
                  height={`250`}
                  quality={100}
                  priority={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
