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
        <div className="fixed top-[50vh] left-0">
            <div
                className="rotate-[-90deg] p-[10px_20px] bg-black text-white font-semibold text-lg"
                onClick={toggleSecondDiv}
                onMouseEnter={handleMouseEnter}
            >
                Useful Links
            </div>
            {showSecondDiv && (
                <div
                    className="useful-wrapper second-div"
                    onMouseLeave={handleMouseLeave}
                >
                    <ul className="useful-links">
                        <a target="_blank" href="https://ncismindia.org/">
                            <li>NCISM</li>
                        </a>
                        <a target="_blank" href="https://ayush.gov.in/">
                            <li>Ministry of AYUSH</li>
                        </a>
                        <a target="_blank" href="https://www.mggaugkp.ac.in/">
                            <li>MGGAUGKP</li>
                        </a>
                        <a
                            target="_blank"
                            href="https://www.upayushcounseling.upsdc.gov.in/"
                        >
                            <li>UP AYUSH Councelling</li>
                        </a>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default UsefulLinks;