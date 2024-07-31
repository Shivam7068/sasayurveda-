import React from 'react';

const PermissionLetters = () => {
    const permissions = [
        { year: '2023-24', link: 'https://drive.google.com/file/d/1IRLUQDuC5ZBbxf1wzMQIgI5XdO0f3gx_/view?usp=drive_link', text: 'For year 2023-24 Ayush Permission Letter for UG. Click To Download' },
        { year: '2022-23', link: 'https://drive.google.com/file/d/1rw9dqD345bPcl2TRCWQJQjxFfrM7V98d/view?usp=drive_link', text: 'For year 2022-23 Ayush Permission Letter for UG. Click To Download' },
        { year: '2021-22', link: 'https://drive.google.com/file/d/1NiBWBY3D8MTMRdhYydwn5C1JnKFZqAxF/view?usp=drive_link', text: 'For year 2021-22 Ayush Permission Letter for UG. Click To Download' },
        { year: '2020-21', link: 'https://drive.google.com/file/d/1TPHl8TKnKBILkcPa5w861z0Z-HAvi1Os/view?usp=drive_link', text: 'For year 2020-21 Ayush Permission Letter for UG. Click To Download' },
        { year: '2019-20', link: 'https://drive.google.com/file/d/1_7QtWvD2TZ_3AvclIYl7V2Jl1X65ObAA/view?usp=drive_link', text: 'For year 2019-20 Ayush Permission Letter for UG. Click To Download' },
        { year: '2018-19', link: 'https://drive.google.com/file/d/1l0cEhYaXkIT22Ie-Tk-REDKu1aCO_Rss/view?usp=drive_link', text: 'For year 2018-19 (Click To Download)' },
        { year: '2017-18', link: 'https://drive.google.com/file/d/1TVQgQBD9U5NmNqz0GEP00hOQfcfEdghQ/view?usp=drive_link', text: 'For year 2017-18 (Click To Download)' },
    ];

    return (
        <div className="flex flex-col items-center justify-center p-4 bg-gray-50">
            <div className="w-full bg-white p-6 rounded-lg shadow-md">
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
