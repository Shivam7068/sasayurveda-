import React from 'react';

const PermissionLetters = () => {
    const permissions = [
        { year: '2023-24', link: '/path/to/2023-24.pdf', text: 'For year 2023-24 Ayush Permission Letter for UG. Click To Download' },
        { year: '2022-23', link: '/path/to/2022-23.pdf', text: 'For year 2022-23 Ayush Permission Letter for UG. Click To Download' },
        { year: '2021-22', link: '/path/to/2021-22.pdf', text: 'For year 2021-22 Ayush Permission Letter for UG. Click To Download' },
        { year: '2020-21', link: '/path/to/2020-21.pdf', text: 'For year 2020-21 Ayush Permission Letter for UG. Click To Download' },
        { year: '2019-20', link: '/path/to/2019-20.pdf', text: 'For year 2019-20 Ayush Permission Letter for UG. Click To Download' },
        { year: '2018-19', link: '/path/to/2018-19.pdf', text: 'For year 2018-19 (Click To Download)' },
        { year: '2017-18', link: '/path/to/2017-18.pdf', text: 'For year 2017-18 (Click To Download)' },
    ];

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
            <div className="max-w-4xl w-full bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-4">Permission Letter by Government of India</h1>
                <ul className="space-y-2">
                    {permissions.map((permission, index) => (
                        <li key={index} className="text-blue-500 hover:text-blue-700">
                            <a href={permission.link} target="_blank" rel="noopener noreferrer">
                                {permission.text}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="mt-6 text-lg font-semibold">
                    College Code: <span className="font-bold">AYU0444</span>
                </div>
            </div>
        </div>
    );
};

export default PermissionLetters;
