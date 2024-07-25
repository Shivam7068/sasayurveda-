import React from 'react'
import VerticalMarquee from '../common_comp/VerticalMarquee'
import Heading from '../common_comp/Heading';

const NewsBoard = () => {
    const items1 = ['Holiday on 29-06-2023 (Bakrid)',
        'BAMS(2021 - 22) Examination From Fill Here', ' BAMS UP UG Counseling 2023-24 click here to registration', 'BAMS UP UG AYUSH Counseling Details (2023-24)', 'BAMS FIRST YEAR(2021 - 22) EXAMINATION form Open 20-06 - 2023'];
    const items2 = ['BAMS UP UG Counseling 2023-24 click here to registration', 'BAMS UP UG AYUSH Counseling Details (2023-24)', 'BAMS FIRST YEAR (2021-22) EXAMINATION form Open 20-06-2023', 'Holiday on 29-06-2023 (Bakrid)', 'BAMS (2021-22) Examination From Fill Here .'];
    const items3 = [];
    return (
        <div className='flex gap-5 flex-col'>
            <Heading name={"Notice"} />
            <div className="flex md:flex-row flex-col gap-3">
                <VerticalMarquee items={items1} type={"News"} />
                <VerticalMarquee items={items2} type={"Notice"} />
                <VerticalMarquee items={items3} type={"Vacancies"} />
            </div>
        </div>
    )
}

export default NewsBoard
