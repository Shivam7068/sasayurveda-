import React from 'react';

const VerticalMarquee = ({ items, type }) => {
    console.log(items.length);
    return (
        <div className="relative overflow-hidden h-64 w-full bg-slate-400">
            <div className='flex justify-center bg-green-900 absolute w-full p-3 items-center text-white text-2xl font-medium z-[10]'>{type}</div>
            {
                items.length > 0 ?
                    <div className="animate-marquee hover:[animation-play-state:paused] ">
                        {items.map((item, index) => (
                            <div key={index} className="py-2 z-[-1] text-center ">
                                {item}
                            </div>
                        ))}
                    </div>
                    :
                    <div className='flex  justify-center m-auto items-center h-full text-green-900 font-bold text-2xl '>
                        No vacancies

                    </div>
            }

        </div>
    );
};

export default VerticalMarquee;
