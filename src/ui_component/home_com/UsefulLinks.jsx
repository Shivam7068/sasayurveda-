import React, { useState } from "react";

const UsefulLinks = () => {
    const [showSecondDiv, setShowSecondDiv] = useState(false);
    const toggleSecondDiv = () => {
        setShowSecondDiv(!showSecondDiv);
    };

    const handleMouseEnter = () => {
        setShowSecondDiv(true);
    };

    const handleMouseLeave = () => {
        setShowSecondDiv(false);
    };

    return (
        <div className="fixed top-[50vh] right-0">
            <div
                className="fixed bottom-[72vh] z-[999] right-2 bg-black text-white px-4 py-2 rounded transform origin-bottom-right -rotate-90"

                onClick={toggleSecondDiv}
                onMouseEnter={handleMouseEnter}
            >
                Important Links
            </div>
            {showSecondDiv && (
                <div
                    className="useful-wrapper bg-green-800 p-[10px]"
                    onMouseLeave={handleMouseLeave}
                >
                    <ul className="useful-links">
                        <a className="" target="_blank" href="https://ncismindia.org/">
                            <li className="bg-slate-50 mb-4">NCISM</li>
                        </a>
                        <a className="" target="_blank" href="https://ayush.gov.in/">
                            <li className="bg-slate-50 mb-4">Ministry of AYUSH</li>
                        </a>
                        <a className="" target="_blank" href="https://www.mggaugkp.ac.in/">
                            <li className="bg-slate-50 mb-4">MGGAUGKP</li>
                        </a>
                        <a className=""
                            target="_blank"
                            href="https://www.upayushcounseling.upsdc.gov.in/"
                        >
                            <li className="bg-slate-50 mb-4">UP AYUSH Councelling</li>
                        </a>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default UsefulLinks;