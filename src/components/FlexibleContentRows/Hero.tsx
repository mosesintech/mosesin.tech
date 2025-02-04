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
                    Hello! I&rsquo;m Moses Maximino Cosme II
                  </h1>
                  <div className='inline-flex items-center divide-x divide-gray-300'>
                    <div className='min-w-0 flex-1 py-1 text-sm text-gray-500 sm:py-3'>
                      <span className='font-medium text-gray-900'>
                        Independent Contractor &#8226; Software Engineer &#8226;
                        UI Designer &#8226; Video Game Developer
                      </span>
                    </div>
                  </div>
                  <p className='mt-6 text-xl text-gray-500'>
                    Born in California, raised in Texas, and living in Alabama.
                    I&lsquo;m a&nbsp;
                    <Link
                      href='https://github.com/mosesintech'
                      target='_blank'
                      className='text-purple-700'
                    >
                      full stack software engineer
                    </Link>
                    &nbsp;with 5 years of experience in JavaScript, TypeScript,
                    React, Node, and PHP. On and off for the last decade,
                    I&#39;ve worked as a&nbsp;
                    <Link
                      href='https://totalityworks.com'
                      target='_blank'
                      className='text-purple-700'
                    >
                      freelance SEO and web designer
                    </Link>
                    , using mostly Figma for design and WordPress for websites.
                    In my free time, I&rsquo;m a hobbyist&nbsp;
                    <Link
                      href='https://totality.games'
                      target='_blank'
                      className='text-purple-700'
                    >
                      game developer
                    </Link>
                    , working on a cross platform cozy cat librarian game called
                    Catalog Chronicles. I mentor aspiring and junior developers
                    through Discord (
                    <Link
                      href='https://discord.gg/2GxvYzz9Fa'
                      target='_blank'
                      className='text-purple-700'
                    >
                      everyone&apos;s invited!
                    </Link>
                    ). But the most important thing about me is that I am&nbsp;
                    <Link
                      href='https://stjohncassian.org/'
                      target='_blank'
                      className='text-purple-700'
                    >
                      a Church janitor.
                    </Link>
                    &nbsp;
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
                  src='/images/moses-cosme-software-engineer.jpg'
                  alt='mosesin.tech'
                  width={`650`}
                  height={`800`}
                  quality={100}
                  priority={true}
                />
              </div>
              {/* Because negative margins are broken in responsive tailwind the following component
                  is necessary for the smallest screen size. */}
              <div className='sm:hidden relative pl-4 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12 mr-4'>
                <Image
                  className='w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 border-purple-700 border-2'
                  src='/images/moses-cosme-software-engineer.jpg'
                  alt='mosesin.tech'
                  width={`650`}
                  height={`800`}
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
