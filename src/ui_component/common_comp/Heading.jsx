import React from 'react';

const Heading = ({name}) => {
  return (
    <div>
      <div className='flex justify-center py-[8px]'>
        <span className='text-[40px] text-green-900 relative font-[600] before:absolute before:h-[4px] before:w-full before:content-["_"] before:bg-[#000000] before:bottom-0 before:left-0  after:absolute after:h-[3px]  after:w-[70%] after:content-["_"] after:bg-[#2b6ba3] after:bottom-[-7px]  after:left-0'>{name}</span>
      </div>
    </div>
  );
}

export default Heading;