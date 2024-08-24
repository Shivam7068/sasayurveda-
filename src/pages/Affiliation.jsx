import React from 'react';

const Affiliation = () => {
    return (
        <div className="flex w-full flex-col items-center p-8 bg-gray-100 ">
            <h1 className="text-3xl font-bold mb-8">University Affiliation</h1>
            <div className="bg-white p-6 rounded-lg shadow-md w-full">
                <h2 className="text-xl font-semibold mb-4">Mahatma Gandhi Kashi Vidyapith</h2>
                <ul className="list-disc list-inside mb-6">
                    <li>
                        <a href="https://drive.google.com/file/d/1cD6-K3QnbO-AWsCP8xg0Mtmf0kU-UU-P/view?usp=sharing" target='_blank' className="text-blue-500 hover:underline">
                            Consent Affiliation Letter
                        </a>
                    </li>
                    <li>
                        <a href="https://drive.google.com/file/d/1OG0iKLcGaTPwyC1dPxz4rCTEdnUDm0CE/view?usp=drive_link" target='_blank' className="text-blue-500 hover:underline">
                            Affiliation Letter 2017-18
                        </a>
                    </li>
                    <li>
                        <a href="https://drive.google.com/file/d/13lTcOuwKTFpsnsctyeWJS9j0xxroE9H3/view?usp=drive_link" target='_blank' className="text-blue-500 hover:underline">
                            Affiliation Letter 2018-19, 2019-20
                        </a>
                    </li>
                    <li>
                        <a href="https://drive.google.com/file/d/1XLJ92gKIU7triUvWTNFr91BCTxSo6DMv/view?usp=drive_link" target='_blank' className="text-blue-500 hover:underline">
                            Affiliation Letter 2020-21
                        </a>
                    </li>
                </ul>
                <p className="font-semibold mb-6">MGKVP University College Code: 1111</p>

                <h2 className="text-xl font-semibold mb-4">Maha Yogi Guru Gorakhnath AYUSH University</h2>
                <ul className="list-disc list-inside mb-6">
                    <li>
                        <a href="https://drive.google.com/file/d/1WQkWz0O33BHk5th4XVuZNTkd-szHq2ab/view?usp=sharing" target='_blank' className="text-blue-500 hover:underline">
                            Affiliation Letter 2021-22
                        </a>
                    </li>
                    <li>
                        <a href="https://drive.google.com/file/d/1f7sDL4RwijhJ6M4JCm_U-BqfUZ7e1aki/view?usp=sharing" target='_blank' className="text-blue-500 hover:underline">
                            Affiliation Letter 2022-23
                        </a>
                    </li>
                </ul>
                <p className="font-semibold">MGGAU College Code: AUVA005</p>
            </div>
        </div>
    );
};

export default Affiliation;
