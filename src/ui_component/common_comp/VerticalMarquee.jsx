import React from 'react';

const VerticalMarquee = ({ items, type }) => {
    return (
        <div className="relative overflow-hidden h-64 w-full bg-slate-400">
            <div className='flex justify-center bg-green-900 absolute w-full p-3 items-center text-white text-2xl font-medium z-[10]'>{type}</div>
            <div className="animate-marquee  ">
                {items.map((item, index) => (
                    <div key={index} className="py-2 z-[-1] text-center hover:animation-pause">
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VerticalMarquee;
