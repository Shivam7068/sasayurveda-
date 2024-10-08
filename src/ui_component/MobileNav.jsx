import React, { useEffect, useRef, useState } from "react";
import MobileMenuItems from "./MobileMenuItem";
import { RiMenu3Line } from "react-icons/ri";
import { menuItemsData } from "../data/navData";

const MobileNav = () => {
    const depthLevel = 0;
    const [showMenu, setShowMenu] = useState(true);
    let ref = useRef();

    useEffect(() => {
        const handler = (event) => {
            if (showMenu && ref.current && !ref.current.contains(event.target)) {
                setShowMenu(false);
            }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler);
        };
    }, [showMenu]);

    return (
        <nav className="mobile-nav">
            <button
                className="mobile-nav__menu-button"
                onClick={() => setShowMenu(!showMenu)}
            >
                <RiMenu3Line />
            </button>

            {!showMenu && (
                <ul className="menus" ref={ref}>
                    {menuItemsData.map((menu, index) => {
                        return (
                            <MobileMenuItems
                                items={menu}
                                key={index}
                                depthLevel={depthLevel}
                                showMenu={showMenu}
                                setShowMenu={setShowMenu}
                            />
                        );
                    })}
                </ul>
            )}
        </nav>
    );
};

export default MobileNav;
