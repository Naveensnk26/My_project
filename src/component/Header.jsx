import React from 'react';

function Header() {
  return (
    <div>
      <div className="flex justify-between px-6 sm:px-24 items-center -mt-16">
        <div className='w-full sm:w-1/3 mt-16'>
          <h1 className='font-serif text-3xl sm:text-4xl font-extrabold text-white'>
            Everything you need to start and run your Business
          </h1>
        </div>
        <div className="text-[30vh] mr-16 font-bold font-inter text-transparent bg-clip-text bg-gradient-to-r from-black to-transparent text-center sm:text-[30vh]">
          NEX
        </div>
      </div>
    </div>
  );
}

export default Header;
