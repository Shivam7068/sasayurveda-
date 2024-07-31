import React from 'react';

const Heading = ({ name }) => {
  return (
    <div>
      <div className='flex justify-center py-[8px]'>
        <span className='text-[40px] text-[#c78e20] relative font-[600] before:absolute before:h-[4px] before:w-full before:content-["_"] before:bg-[#4d2f2a]  before:-bottom-2 before:left-0  after:absolute after:h-[3px] '>{name}</span>
      </div>
    </div>
  );
}

export default Heading;